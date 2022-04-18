import express from "express";
import fileInfos from "../../models/fileInfo/file.js";
const router = express.Router();
import Multer from "multer";
import admin from "firebase-admin";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

router.post("/uploadReport", multer.single("report_file"), async (req, res) => {
  const id = req.body.id;
  const folder = "file";
  const fileName = `${folder}/${id}/${req.file.originalname}`;
  const fileUpload = bucket.file(fileName);

  try {
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });
    let addReport = await fileInfos.updateOne(
      { document_id: id },
      { $set: { report: req.file.originalname } }
    );
    blobStream.on("error", (err) => {
      res.status(405).json(err);
    });

    blobStream.on("finish", () => {
      res.status(200).send("Upload complete!");
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post(
  "/uploadBlueprint",
  multer.single("blueprint_file"),
  async (req, res) => {
    const id = req.body.id;
    const folder = "file";
    const fileName = `${folder}/${id}/${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);
    try {
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
      let addReport = await fileInfos.updateOne(
        { document_id: id },
        { $set: { blueprint: req.file.originalname } }
      );
      blobStream.on("error", (err) => {
        res.status(405).json(err);
      });

      blobStream.on("finish", () => {
        res.status(200).send("Upload complete!");
      });

      blobStream.end(req.file.buffer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

router.post(
  "/uploadQuotation_1",
  multer.single("quotation_file_1"),
  async (req, res) => {
    const id = req.body.id;
    const folder = "file";
    const fileName = `${folder}/${id}/${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);
    try {
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
      let addReport = await fileInfos.updateOne(
        { document_id: id },
        { $set: { quotation_1: req.file.originalname } }
      );
      blobStream.on("error", (err) => {
        res.status(405).json(err);
      });

      blobStream.on("finish", () => {
        res.status(200).send("Upload complete!");
      });

      blobStream.end(req.file.buffer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

router.post(
  "/uploadQuotation_2",
  multer.single("quotation_file_2"),
  async (req, res) => {
    const id = req.body.id;
    const folder = "file";
    const fileName = `${folder}/${id}/${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);
    try {
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
      let addReport = await fileInfos.updateOne(
        { document_id: id },
        { $set: { quotation_2: req.file.originalname } }
      );
      blobStream.on("error", (err) => {
        res.status(405).json(err);
      });

      blobStream.on("finish", () => {
        res.status(200).send("Upload complete!");
      });

      blobStream.end(req.file.buffer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

router.post(
  "/uploadQuotation_3",
  multer.single("quotation_file_3"),
  async (req, res) => {
    const id = req.body.id;
    const folder = "file";
    const fileName = `${folder}/${id}/${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);
    try {
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
      let addReport = await fileInfos.updateOne(
        { document_id: id },
        { $set: { quotation_3: req.file.originalname } }
      );
      blobStream.on("error", (err) => {
        res.status(405).json(err);
      });

      blobStream.on("finish", () => {
        res.status(200).send("Upload complete!");
      });

      blobStream.end(req.file.buffer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

router.post("/download", async (req, res) => {
  let File = "file/624bf4d105a4e40fd7ad83b0/blueprint";
  const options = {
    version: "v4",
    action: "read",
    expires: Date.now() + 1000 * 60 * 60,
    // destination: "file/2F624bf4d105a4e40fd7ad83b0",
  };

  const url = await bucket.file(File).getSignedUrl(options);
  res.status(200).json({ link: url });
  console.log(url);
});

router.get("/profile/:id", (req, res) => {
  const file = bucket.file(`profile/${req.params.id}`);
  file.download().then((downloadResponse) => {
    res.status(200).send(downloadResponse[0]);
  });
});

export default router;
