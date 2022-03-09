import express from "express";
const router = express.Router();
import admins from "../models/Admin/admin.js";
import users from "../models/User/user.js";

router.post("/getLevel", async (req, res) => {
  const user_uid = req.body.uid;
  console.log("req",user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    if (user_uid == null) {
      return res.status(400).json({ message: "Bad req" });
    }
    const userAuth = await users.find({ uid: user_uid });
    if (userAuth[0] == null) {
      const adminAuth = await admins.find({ uid: user_uid });
      console.log("res user level : ", adminAuth[0].level);
      res.status(200).json({level:adminAuth[0].level});
      if (userAuth[0] == null) {
        return res.status(404).json({ message: "Cannot find this user" });
      }
    }
    console.log("res user level : ", userAuth[0].level);
    res.status(200).json({level:userAuth[0].level});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;