import express from "express";
const router = express.Router();
import admins from "../../models/Admin/admin.js";
import users from "../../models/User/user.js";
import lessthanfivems from "../../models/AllDocument/lessthanfivem.js";
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

// Getting all
router.post("/getAllUsers", checkAuth, async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.post("/userInfo", checkAuth, async (req, res) => {
  const user_uid = req.body.uid;
  try {
    // const user = await users.find({ uid: user_uid });
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
router.post("/getAllNewDoc", checkAuth, async (req, res) => {
  try {
    const documents = await lessthanfivems.find();
    console.log("this is doc ", documents);
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Updating Doc Status
router.patch("/updateDocStatus", checkAuth, async (req, res) => {
  document = await document.findById(req.body.id);
  console.log("this is doc ", document);
  if (req.body.approval_status == "waiting") {
    res.document.approval_status = "waiting";
  } else if (req.body.approval_status == "dms") {
    res.document.approval_status = "dms";
  } else if (req.body.approval_status == "moph") {
    res.document.approval_status = "moph";
  } else if (req.body.approval_status == "approved") {
    res.document.approval_status = "approved";
  } else if (req.body.approval_status == "rejected") {
    res.document.approval_status = "rejected";
  } else {
    res.status(400).json({ message: "bad req" });
  }
  try {
    const updatedWaiting = await res.document.save();
    res.json(updatedWaiting);
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
