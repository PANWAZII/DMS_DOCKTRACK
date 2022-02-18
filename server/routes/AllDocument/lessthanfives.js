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
    boss_email:req.body.boss_email,
    user2_name: req.body.user2_name,
    user2_position: req.body.user2_position,
    user2_tel: req.body.user2_tel,
    user2_fax: req.body.user2_fax,
    user2_email: req.body.user2_email,
    user3_name: req.body.user3_name,
    user3_position: req.body.user3_position,
    user3_tel: req.body.user3_tel,
    user3_fax: req.body.user3_fax,
    user3_email: req.body.user3_email,
    total: req.body.total,
    baht_text: req.body.baht_text,
    resource: req.body.resource,
    detail_notstd: req.body.detail_notstd,
    quantity: req.body.quantity,
    unit: req.body.unit,
    price_unit: req.body.price_unit,
    sum: req.body.sum,
    method: req.body.method,
    destination: req.body.destination,
    cert: req.body.cert,
    list_old: req.body.list_old,
    locate_old: req.body.locate_old,
    year_old: req.body.year_old,
    obstacle: req.body.obstacle,
    purpose_of_use: req.body.purpose_of_use,
    compare: req.body.compare,
    major: req.body.major,
    quantity_major: req.body.quantity_major,
    specific_info: req.body.specific_info,
    created_date: req.body.created_date,
    modified_date: req.body.modified_date,
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
