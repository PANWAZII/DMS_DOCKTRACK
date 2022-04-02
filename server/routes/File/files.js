import express from "express";
const router = express.Router();
import Multer from "multer";
import admin from "firebase-admin";

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// const serviceAccount = require("./firebase-config.json");
// import serviceAccount from "../../firebaseStorageConfig";

import config from "../../firebaseStorageConfig.js";

const FirebaseApp = admin.initializeApp({
  credential: admin.credential.cert(config),
  storageBucket: "dms-document-tracking-ef733.appspot.com",
});
const storage = FirebaseApp.storage();
const bucket = storage.bucket();

router.use("/site", express.static("public"));

router.all("/", (req, res) =>
  res.status(200).send("Welcome to example firestorage api")
);

router.post("/uploadFile", multer.single("file"), (req, res) => {
  console.log("this is file ", req.body);
  const id = req.body.id
//   console.log("this is id from query ",req.body.id);
//   console.log("this is file name ", req.body.file.mimetype);
  const folder = "file";
  const fileName = `${folder}/${id}`;
  const fileUpload = bucket.file(fileName);
  const blobStream = fileUpload.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  blobStream.on("error", (err) => {
    res.status(405).json(err);
  });

  blobStream.on("finish", () => {
    res.status(200).send("Upload complete!");
  });

  blobStream.end(req.file.buffer);
});

router.get("/profile/:id", (req, res) => {
  const file = bucket.file(`profile/${req.params.id}`);
  file.download().then((downloadResponse) => {
    res.status(200).send(downloadResponse[0]);
  });
});

export default router;
