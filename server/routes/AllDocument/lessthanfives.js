import express from "express";
import lessthanfivems from "../../models/AllDocument/lessthanfivem.js";
const router = express.Router();
// Getting all
router.get("/getAllDocuments", async (req, res) => {
  try {
    const allDocuments = await lessthanfivems.find();
    res.status(200).json(allDocuments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
// router.get("/:id", getSubscriber, (req, res) => {
//   res.json(res.subscriber);
// });

// Creating new User
router.post("/createNewDocument", async (req, res) => {
  const lessthanfivem = new lessthanfivems({
    uid: req.body.uid,
    project_name: req.body.project_name,
    department_name: req.body.department_name,
    boss_name: req.body.boss_name,
    boss_position: req.body.boss_position,
    boss_tel: req.body.boss_tel,
    boss_fax: req.body.boss_fax,
    user2_name: req.body.user2_name,
    user2_position: req.body.position_name,
    user2_tel: req.body.position_name,
    user2_fax: req.body.position_name,
    user2_email: req.body.position_name,
    user3_name: req.body.position_name,
    user3_position: req.body.position_name,
    user3_tel: req.body.position_name,
    user3_fax: req.body.position_name,
    user3_email: req.body.position_name,
    total: req.body.position_name,
    baht_text: req.body.position_name,
    resource: req.body.position_name,
    detail_notstd: req.body.position_name,
    quantity: req.body.position_name,
    unit: req.body.position_name,
    price_unit: req.body.position_name,
    sum: req.body.position_name,
    method: req.body.position_name,
    destination: req.body.position_name,
    cert: req.body.position_name,
    list_old: req.body.position_name,
    locate_old: req.body.position_name,
    year_old: req.body.position_name,
    obstacle: req.body.position_name,
    purpose_of_use: req.body.position_name,
    compare: req.body.position_name,
    major: req.body.position_name,
    quantity_major: req.body.position_name,
    specific_info: req.body.position_name,
    created_date: req.body.position_name,
    modified_date: req.body.position_name,
    available_status: 1,
  });
  try {
    const newLessthanfivem = await lessthanfivem.save();
    res.status(201).json(newLessthanfivem);
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
