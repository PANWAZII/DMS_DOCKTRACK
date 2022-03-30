import express from "express";
import documents from "../../models/AllDocument/document.js";
import getGovYear from "../../library/govYear.js";

const router = express.Router();
// Getting all
router.get("/getAllDocNum", async (req, res) => {
  const govYear = getGovYear();
  try {
    const allDocuments = await documents.find({ budget_year: govYear });
    res.status(200).json({ count: allDocuments.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getAllDocuments", async (req, res) => {
  const govYear = getGovYear();
  try {
    const allDocuments = await documents.find({ budget_year: govYear });
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
  const govYear = getGovYear();
  try {
    const hardware = await documents.find({
      $and: [{ budget_year: govYear }, { project_type: "hardware" }],
    });
    res.status(200).json({ count: hardware.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getSoftware", async (req, res) => {
  const govYear = getGovYear();
  try {
    const software = await documents.find({
      $and: [{ budget_year: govYear }, { project_type: "software" }],
    });
    res.status(200).json({ count: software.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getNetwork", async (req, res) => {
  const govYear = getGovYear();
  try {
    const network = await documents.find({
      $and: [{ budget_year: govYear }, { project_type: "network" }],
    });
    res.status(200).json({ count: network.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getCamera", async (req, res) => {
  const govYear = getGovYear();
  try {
    const cam = await documents.find({
      $and: [{ budget_year: govYear }, { project_type: "camera" }],
    });
    res.status(200).json({ count: cam.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getNormalBudget", async (req, res) => {
  const govYear = getGovYear();
  try {
    const normalBudget = await documents.find({
      $and: [{ budget_year: govYear }, { budget_resource: "normal_budget" }],
    });
    if (!normalBudget[0]) {
      res.status(200).json({ sum: 0 });
    } else {
      const data = normalBudget
        .map((item) => item.sum)
        .reduce((prev, next) => prev + next);
      res.status(200).json({ sum: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getMaintenanceBudget", async (req, res) => {
  const govYear = getGovYear();
  try {
    const maintenanceBudget = await documents.find({
      $and: [
        { budget_year: govYear },
        { budget_resource: "maintenance_budget" },
      ],
    });
    if (!maintenanceBudget[0]) {
      res.status(200).json({ sum: 0 });
    } else {
      const data = maintenanceBudget
        .map((item) => item.sum)
        .reduce((prev, next) => prev + next);
      res.status(200).json({ sum: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getDonationBudget", async (req, res) => {
  const govYear = getGovYear();
  try {
    const donationBudget = await documents.find({
      $and: [{ budget_year: govYear }, { budget_resource: "donation_budget" }],
    });
    if (!donationBudget[0]) {
      res.status(200).json({ sum: 0 });
    } else {
      const data = donationBudget
        .map((item) => item.sum)
        .reduce((prev, next) => prev + next);
      res.status(200).json({ sum: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getFoundationBudget", async (req, res) => {
  const govYear = getGovYear();
  console.log(govYear);
  try {
    const foundationBudget = await documents.find({
      $and: [
        { budget_year: govYear },
        { budget_resource: "foundation_budget" },
      ],
    });
    if (!foundationBudget[0]) {
      res.status(200).json({ sum: 0 });
    } else {
      const data = foundationBudget
        .map((item) => item.sum)
        .reduce((prev, next) => prev + next);
      res.status(200).json({ sum: data });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
