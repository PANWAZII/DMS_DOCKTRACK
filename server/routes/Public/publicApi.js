import express from "express";
import lessthanfivems from "../../models/AllDocument/lessthanfivem.js";
const router = express.Router();
// Getting all
router.get("/getAllDocNum", async (req, res) => {
  try {
    const allDocuments = await lessthanfivems.find();
    res.status(200).json({count:allDocuments.length});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;