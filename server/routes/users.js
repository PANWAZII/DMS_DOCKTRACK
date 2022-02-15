import express from "express";
const router = express.Router();
import users from "../models/user.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
router.get("/getAllUsers", async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/userInfo", async (req, res) => {
  const user_uid = req.body.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const userInfo = await users.find( {uid: user_uid} );
    if (userInfo == null) {
      return res.status(404).json({ message: "Cannot find this user" });
    }
    console.log("res user : ", userInfo[0]);
    res.status(200).json(userInfo[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating new User
router.post("/createNewUser", async (req, res) => {
  const auth = getAuth();
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.first_name
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const firebaseUser = userCredential.user;
      // console.log(user);
      const user_id = firebaseUser.uid;
      console.log("uid", user_id);
      const user = new users({
        uid: user_id,
        first_name: firstname,
        email: email,
        available_status: 1,
      });
      const newUser = user.save();
      res.status(201).json(newUser);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      // console.log(errorMessage);
      res.json(errorCode);
    });

  // try {
  //   const newUser = await user.save();
  //   res.status(201).json(newUser);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

// Updating One
// router.patch("/:id", getSubscriber, async (req, res) => {
//   if (req.body.name != null) {
//     res.subscriber.name = req.body.name;
//   }
//   if (req.body.subscribedToChannel != null) {
//     res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save();
//     res.json(updatedSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Deleting One
// router.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await user.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.subscriber = subscriber;
//   next();
// }

// module.exports = router;
export default router;
