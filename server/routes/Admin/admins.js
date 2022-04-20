import express from "express";
const router = express.Router();
import admins from "../../models/Admin/admin.js";
import users from "../../models/User/user.js";
import documents from "../../models/AllDocument/document.js";
import documentnumbers from "../../models/DocumentNumber/documentNumber.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import checkAuth from "../../middleware/auth.js";

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

// Updating Doc Status
router.put("/updateDocStatus", async (req, res) => {
  let Status = "";
  let StatusTh = "";
  const reqStatus = req.body.approval_status;
  const docId = req.body.id;
  if (reqStatus === "waiting") {
    const DocumentNumbers = await documentnumbers.find();
    console.log("this is docnum", DocumentNumbers);
    if (!DocumentNumbers[0]) {
      const DocNum = new documentnumbers({
        id: "docnum",
        count: "00",
        month: "00",
        year: "00",
      });
      console.log("ppass if");
      const newDocNum = await DocNum.save();
      console.log(newDocNum);
    }
    Status = "waiting";
    StatusTh = "รอการประชุม";
  } else if (reqStatus === "dms") {
    Status = "dms";
    StatusTh = "ส่งกรมฯ ลงนาม";
  } else if (reqStatus === "dms_returned") {
    Status = "dms_returned";
    StatusTh = "รับคืนจากกรมฯ";
  } else if (reqStatus === "moph") {
    Status = "moph";
    StatusTh = "ส่งกระทรวงฯ ลงนาม";
  } else if (reqStatus === "moph_returned") {
    Status = "moph_returned";
    StatusTh = "รับคืนจากกระทรวงฯ";
  } else if (reqStatus === "returned") {
    Status = "returned";
    StatusTh = "ส่งคืนแล้ว";
  } else if (reqStatus === "rejected") {
    Status = "rejected";
    StatusTh = "ที่ประชุมมีมติแก้ไข";
  } else {
    return res.status(400).json({ message: "bad req" });
  }
  try {
    let updatedWaiting = await documents.updateOne(
      { _id: docId },
      { $set: { approval_status: Status, approval_status_th: StatusTh } }
    );
    res.status(200).json({ updatedWaiting });
  } catch (err) {
    res.status(400).json({ message: err.message });
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
