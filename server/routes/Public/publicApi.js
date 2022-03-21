import express from "express";
import lessthanfivems from "../../models/AllDocument/lessthanfivem.js";
const router = express.Router();
// Getting all
router.get("/getAllDocNum", async (req, res) => {
  try {
    const allDocuments = await lessthanfivems.find();
    res.status(200).json({ count: allDocuments.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getAllDocuments", async (req, res) => {
  try {
    const allDocuments = await lessthanfivems.find();
    const Data = allDocuments.map((item) => {
      const container = {};
      container["name"] = item.project_name;
      container["date"] = item.created_date;
      container["status"] = item.approval_status_th;
      return container;
    });
    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getHardware", async (req, res) => {
  try {
    const hardware = await lessthanfivems.find({ project_type: "hardware" });
    res.status(200).json({ count: hardware.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getSoftware", async (req, res) => {
  try {
    const software = await lessthanfivems.find({ project_type: "software" });
    res.status(200).json({ count: software.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getNetwork", async (req, res) => {
  try {
    const network = await lessthanfivems.find({ project_type: "network" });
    res.status(200).json({ count: network.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getCamera", async (req, res) => {
  try {
    const cam = await lessthanfivems.find({ project_type: "camera" });
    res.status(200).json({ count: cam.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
