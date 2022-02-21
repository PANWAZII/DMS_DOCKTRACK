import express from "express";
import checkAuth from "../../middleware/auth.js";
const router = express.Router();
import budgetsources from "../../models/Dropdown/budgetSource.js";
// Getting all
router.get("/getAllSources" ,async (req, res) => {
  try {
    const allSources = await budgetsources.find();
    res.status(200).json(allSources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
// router.get("/:id", getSubscriber, (req, res) => {
//   res.json(res.subscriber);
// });

// Creating new User
router.post("/createNewSource", async (req, res) => {
  const source = new budgetsources({
    budget_sources: req.body.budget_sources,
    available_status: 1,
  });
  try {
    const newSource = await source.save();
    res.status(201).json(newSource);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.subscriber = subscriber;
  next();
}

export default router;
