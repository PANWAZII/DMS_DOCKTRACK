import express from "express";
const router = express.Router();
import users from "../../models/User/user.js";
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
  const user_uid = req.query.uid;
  try {
    // const user = await users.find({ uid: user_uid });
    if (user_uid == null) {
      return res.status(400).json({ message: "Bad req" });
    }
    const userInfo = await users.find({ uid: user_uid });
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
router.post("/createNewUser", async (req, res) => {
  const date = Date.now();
  const auth = getAuth();
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const position_id = req.body.position_id;
  const department_id = req.body.department_id;
  const telephone = req.body.tel;
  const fax = req.body.fax;
  const level = "user";
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
        last_name: lastname,
        email: email,
        position_id: position_id,
        department_id: department_id,
        tel: telephone,
        fax: fax,
        level:level,
        available_status: 1,
        created_date: date,
        modified_date: date,
      });
      const newUser = user.save();
      res.status(201).json(newUser);
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
