import express from "express";
const router = express.Router();
import admins from "../../models/Admin/admin.js";
import users from "../../models/User/user.js";
import documents from "../../models/AllDocument/document.js";
import documentnumbers from "../../models/DocumentNumber/documentNumber.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import moment from "moment";
import checkAuth from "../../middleware/auth.js";
import e from "express";

const firebaseConfig = {
  apiKey: "AIzaSyAA4gEFyqUFR-XH0LYGbysywjdIBB_Exn4",
  authDomain: "dms-document-tracking-ef733.firebaseapp.com",
  projectId: "dms-document-tracking-ef733",
  storageBucket: "dms-document-tracking-ef733.appspot.com",
  messagingSenderId: "331164339207",
  appId: "1:331164339207:web:72498673e3b1db30ef6ea2",
  measurementId: "G-DRWDF7NT3R",
};

const app = initializeApp(firebaseConfig);

router.post("/userInfo", checkAuth, async (req, res) => {
  const user_uid = req.body.uid;
  try {
    if (user_uid == null) {
      return res.status(400).json({ message: "Bad req" });
    }
    const userInfo = await admins.find({ uid: user_uid });
    if (userInfo[0] == null) {
      return res.status(404).json({ message: "Cannot find this user" });
    }
    console.log("res user : ", userInfo[0]);
    res.status(200).json(userInfo[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating new User
router.post("/createNewAdmin", async (req, res) => {
  const date = Date.now();
  const auth = getAuth();
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const telephone = req.body.tel;
  const level = "admin";
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const firebaseUser = userCredential.user;
      // console.log(user);
      const user_id = firebaseUser.uid;
      console.log("uid", user_id);
      const admin = new admins({
        uid: user_id,
        first_name: firstname,
        last_name: lastname,
        email: email,
        tel: telephone,
        available_status: 1,
        level: level,
        created_date: date,
        modified_date: date,
      });
      const newAdmin = admin.save();
      res.status(201).json(newAdmin);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      // console.log(errorMessage);
      res.json({ message: errorCode });
    });

  // try {
  //   const newUser = await user.save();
  //   res.status(201).json(newUser);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

//getAllNewDoc
router.post("/getAllNewDoc", async (req, res) => {
  try {
    const Documents = await documents.find({ approval_status: "new" });
    res.status(200).json(Documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/getAllUsers", async (req, res) => {
  try {
    const allUsers = await users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/getUserById", async (req, res) => {
  try {
    const user = await users.find({ _id: req.body.uid });
    res.status(200).json(user[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/acceptDoc", async (req, res) => {
  const CurrentMonth = moment().format("MM");
  const CurrentYear = moment().format("YY");
  const docId = req.body.id;
  console.log("this is doc id ", docId);
  const docNumId = "docnum";
  let ProjectNum = "";
  const Status = "waiting";
  const StatusTh = "?????????????????????????????????";
  console.log("this is month ", CurrentMonth, "this is year ", CurrentYear);
  try {
    const DocumentNumbers1 = await documentnumbers.find({ id: docNumId });
    console.log("this is docnum", DocumentNumbers1);
    if (!DocumentNumbers1[0]) {
      const DocNum = new documentnumbers({
        id: docNumId,
        count: 1,
        month: CurrentMonth,
        year: CurrentYear,
      });
      console.log("create if empty");
      const newDocNum = await DocNum.save();
      console.log(newDocNum);
    }
    const DocumentNumbers2 = await documentnumbers.find({ id: docNumId });
    console.log(DocumentNumbers2[0].year, "-----", DocumentNumbers2[0].month);
    if (
      DocumentNumbers2[0].year === CurrentYear &&
      DocumentNumbers2[0].month === CurrentMonth
    ) {
      const YearTh = parseInt(DocumentNumbers2[0].year) + 43;
      let Count = DocumentNumbers2[0].count;
      let CountStr = Count.toString().length;
      console.log("start if 1");
      console.log("this is count", Count);
      console.log("this is length", Count.toString().length);
      if (CountStr === 1) {
        console.log("start if 2");
        ProjectNum =
          DocumentNumbers2[0].month + YearTh + "0" + DocumentNumbers2[0].count;
        console.log("this is project num 1", ProjectNum);
      } else if (CountStr === 2) {
        ProjectNum =
          DocumentNumbers2[0].month + YearTh + DocumentNumbers2[0].count;
        console.log("this is project num 2", ProjectNum);
      }
      let updatedDocStatus = await documents.updateOne(
        { _id: docId },
        {
          $set: {
            approval_status: Status,
            approval_status_th: StatusTh,
            project_num: ProjectNum,
          },
        }
      );
      let updatedDocNum = await documentnumbers.updateOne(
        { id: docNumId },
        {
          $set: {
            count: Count + 1,
          },
        }
      );
      return res.status(200).json({ updatedDocStatus, updatedDocNum });
    } else if (
      !(
        DocumentNumbers2[0].year === CurrentYear &&
        DocumentNumbers2[0].month === CurrentMonth
      )
    ) {
      let syncDocNum = await documentnumbers.updateOne(
        { id: docNumId },
        {
          $set: {
            count: 1,
            month: CurrentMonth,
            year: CurrentYear,
          },
        }
      );
      const YearTh = parseInt(CurrentYear) + 43;
      const ProjectNum2 = CurrentMonth + YearTh + "01";
      console.log(ProjectNum2);
      let updatedDocStatus2 = await documents.updateOne(
        { _id: docId },
        {
          $set: {
            approval_status: Status,
            approval_status_th: StatusTh,
            project_num: ProjectNum2,
          },
        }
      );
      return res.status(200).json({ syncDocNum, updatedDocStatus2 });
    } else {
      console.log("ELSE");
      return res.status(400);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/getAcceptedDoc", async (req, res) => {
  const Status = "new";
  try {
    const AcceptDoc = await documents.find({
      approval_status: { $ne: Status },
    });
    res.status(200).json(AcceptDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Updating Doc Status
router.put("/updateDocStatus", async (req, res) => {
  let Status = "";
  let StatusTh = "";
  const reqStatus = req.body.approval_status;
  const docId = req.body.id;
  if (reqStatus === "dms") {
    Status = "dms";
    StatusTh = "????????????????????? ???????????????";
  } else if (reqStatus === "dms_returned") {
    Status = "dms_returned";
    StatusTh = "???????????????????????????????????????";
  } else if (reqStatus === "moph") {
    Status = "moph";
    StatusTh = "????????????????????????????????? ???????????????";
  } else if (reqStatus === "moph_returned") {
    Status = "moph_returned";
    StatusTh = "???????????????????????????????????????????????????";
  } else if (reqStatus === "returned") {
    Status = "returned";
    StatusTh = "??????????????????????????????";
  } else if (reqStatus === "rejected") {
    Status = "rejected";
    StatusTh = "?????????????????????????????????????????????????????????";
  } else {
    return res.status(400).json({ message: "bad req" });
  }
  try {
    let updatedWaiting = await documents.updateOne(
      { _id: docId },
      {
        $set: {
          approval_status: Status,
          approval_status_th: StatusTh,
        },
      }
    );
    res.status(200).json({ updatedWaiting });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/getDocumentComment", async (req, res) => {
  try {
    const DocumentComment = await documents.find({ _id: req.body.id });
    res.status(200).json({ comment: DocumentComment[0].document_comment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/getTechnicalComment", async (req, res) => {
  try {
    const TechnicalComment = await documents.find({ _id: req.body.id });
    res.status(200).json({ comment: TechnicalComment[0].technical_comment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/createDocumentComment", async (req, res) => {
  try {
    const DocumentComment = await documents.updateOne(
      { _id: req.body.id },
      {
        $set: {
          document_comment: req.body.comment,
        },
      }
    );
    res.status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/createTechnicalComment", async (req, res) => {
  try {
    const TechnicalComment = await documents.updateOne(
      { _id: req.body.id },
      {
        $set: {
          technical_comment: req.body.comment,
        },
      }
    );
    res.status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/changeDocumentCheck", async (req, res) => {
  const Id = req.body.id;
  const NewStatus = req.body.new_status;
  try {
    await documents.updateOne(
      { _id: Id },
      {
        $set: {
          document_check: NewStatus,
        },
      }
    );
    return res.status(201);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/changeTechnicalCheck", async (req, res) => {
  const Id = req.body.id;
  const NewStatus = req.body.new_status;
  try {
    await documents.updateOne(
      { _id: Id },
      {
        $set: {
          technical_check: NewStatus,
        },
      }
    );
    return res.status(201);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// // Deleting One
// router.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getDocument(req, res, next) {
//   let document;
//   try {
//     document = await document.findById(req.body.id);
//     if (document == null) {
//       return res.status(404).json({ message: "Cannot find this document" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.document = document;
//   next();
// }

// module.exports = router;
export default router;
