import express from "express";
import fileInfos from "../../models/fileInfo/file.js";
const router = express.Router();
import Multer from "multer";
import admin from "firebase-admin";
import config from "../../firebaseStorageConfig.js";

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

const FirebaseApp = admin.initializeApp({
  credential: admin.credential.cert(config),
  storageBucket: "dms-document-tracking-ef733.appspot.com",
});
const storage = FirebaseApp.storage();
const bucket = storage.bucket();

router.post("/uploadReport", multer.single("report_file"), async (req, res) => {
  if (req.file === undefined) {
    return res.status(200).json({ message: "No file attached." });
  }
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
    if (req.file === undefined) {
      return res.status(200).json({ message: "No file attached." });
    }
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
      let addBlueprint = await fileInfos.updateOne(
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
    if (req.file === undefined) {
      return res.status(200).json({ message: "No file attached." });
    }
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
      let addQuotation_1 = await fileInfos.updateOne(
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
    if (req.file === undefined) {
      return res.status(200).json({ message: "No file attached." });
    }
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
      let addQuotation_2 = await fileInfos.updateOne(
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
    if (req.file === undefined) {
      return res.status(200).json({ message: "No file attached." });
    }
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
      let addQuotation_3 = await fileInfos.updateOne(
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
  const folder = "file";
  const id = req.body.id;
  const fileType = req.body.file_type;
  let File = "";
  try {
    const fileInfo = await fileInfos.find({ document_id: id });
    console.log("this is report file", fileInfo[0].report);
    if (fileType === "report") {
      File = `${folder}/${id}/${fileInfo[0].report}`;
    } else if (fileType === "quotation_1") {
      File = `${folder}/${id}/${fileInfo[0].quotation_1}`;
    } else if (fileType === "quotation_2") {
      File = `${folder}/${id}/${fileInfo[0].quotation_2}`;
    } else if (fileType === "quotation_3") {
      File = `${folder}/${id}/${fileInfo[0].quotation_3}`;
    } else if (fileType === "blueprint") {
      File = `${folder}/${id}/${fileInfo[0].blueprint}`;
    } else {
      res.status(400).json({ message: "Bad request" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
  const options = {
    version: "v4",
    action: "read",
    expires: Date.now() + 1000 * 60 * 60,
  };
  try {
    const url = await bucket.file(File).getSignedUrl(options);
    res.status(200).json({ link: url });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get("/profile/:id", (req, res) => {
  const file = bucket.file(`profile/${req.params.id}`);
  file.download().then((downloadResponse) => {
    res.status(200).send(downloadResponse[0]);
  });
});

export default router;
