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

// router.use("/site", express.static("public"));

// router.all("/", (req, res) =>
//   res.status(200).send("Welcome to example firestorage api")
// );

router.post("/uploadReport", multer.single("report_file"), (req, res) => {
  const id = req.body.id;
  const filename = "report";
  const folder = "file";
  const fileName = `${folder}/${id}/${filename}`;
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

router.post("/uploadBlueprint", multer.single("blueprint_file"), (req, res) => {
  const id = req.body.id;
  const filename = "blueprint";
  const folder = "file";
  const fileName = `${folder}/${id}/${filename}`;
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

router.post(
  "/uploadQuotation_1",
  multer.single("quotation_file_1"),
  (req, res) => {
    const id = req.body.id;
    const filename = "quotation_1";
    const folder = "file";
    const fileName = `${folder}/${id}/${filename}`;
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
  }
);

router.post(
  "/uploadQuotation_2",
  multer.single("quotation_file_2"),
  (req, res) => {
    const id = req.body.id;
    const filename = "quotation_2";
    const folder = "file";
    const fileName = `${folder}/${id}/${filename}`;
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
  }
);

router.post(
  "/uploadQuotation_3",
  multer.single("quotation_file_3"),
  (req, res) => {
    const id = req.body.id;
    const filename = "quotation_3";
    const folder = "file";
    const fileName = `${folder}/${id}/${filename}`;
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
  }
);

router.get("/profile/:id", (req, res) => {
  const file = bucket.file(`profile/${req.params.id}`);
  file.download().then((downloadResponse) => {
    res.status(200).send(downloadResponse[0]);
  });
});

export default router;
