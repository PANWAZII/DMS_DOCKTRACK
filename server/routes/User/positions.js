import express from "express";
const router = express.Router();
import positions from "../../models/User/position.js";
import checkAuth from "../../middleware/auth.js";
// Getting all
router.get("/getAllPositions", async (req, res) => {
  try {
    const allPositions = await positions.find();
    res.status(200).json(allPositions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/getPositionById", checkAuth, async (req, res) => {
  try {
    const position = await positions.findOne({ _id: req.body.id });
    res.status(200).json({ position: position.position_name });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating new User
router.post("/createNewPosition", async (req, res) => {
  const position = new positions({
    position_name: req.body.position_name,
    available_status: 1,
  });
  try {
    const newPosition = await position.save();
    res.status(201).json(newPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
