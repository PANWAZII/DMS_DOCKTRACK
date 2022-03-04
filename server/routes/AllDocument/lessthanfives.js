import express from "express";
import lessthanfivems from "../../models/AllDocument/lessthanfivem.js";
import checkAuth from "../../middleware/auth.js";
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
router.post("/createNewDocument", checkAuth, async (req, res) => {
  const { data } = req.body;
  if (!data) {
    res.status(400).send("Data not ....");
    return;
  }
  const date = Date.now();

  const more = {
    created_date: date,
    modified_date: date,
    approval_status: "waiting",
    available_status: 1,
  };

  // const data =
  // console.log("this is Header : ",req.headers)
  // console.log("this is req data",req.body)
  // const lessthanfivem = new lessthanfivems({
  //   uid:data.uid,
  //   project_name:data.project_name,
  //   department_name:data.department_name,
  //   boss_name:data.boss_name,
  //   boss_position:data.boss_position,
  //   boss_tel:data.boss_tel,
  //   boss_fax:data.boss_fax,
  //   boss_email:data.boss_email,
  //   user2_name:data.user2_name,
  //   user2_position:data.user2_position,
  //   user2_tel:data.user2_tel,
  //   user2_fax:data.user2_fax,
  //   user2_email:data.user2_email,
  //   user3_name:data.user3_name,
  //   user3_position:data.user3_position,
  //   user3_tel:data.user3_tel,
  //   user3_fax:data.user3_fax,
  //   user3_email:data.user3_email,
  //   baht_text:data.baht_text,
  //   resource:data.resource,
  //   detail_notstd:data.detail_notstd,
  //   quantity:data.quantity,
  //   unit:data.unit,
  //   price_unit:data.price_unit,
  //   sum:data.sum,
  //   method:data.method,
  //   destination:data.destination,
  //   cert:data.cert,
  //   list_old:data.list_old,
  //   locate_old:data.locate_old,
  //   year_old:data.year_old,
  //   obstacle:data.obstacle,
  //   purpose_of_use:data.purpose_of_use,
  //   compare:data.compare,
  //   major:data.major,
  //   quantity_major:data.quantity_major,
  //   specific_info:data.specific_info,
  //   created_date: date,
  //   modified_date: date,
  //   available_status: 1,
  // });
  try {
    console.log("start creating doc ");
    const lessthanfivem = new lessthanfivems({ ...data, ...more });
    const newLessthanfivem = await lessthanfivem.save();
    console.log("finish creating doc ");
    res.status(201).json(newLessthanfivem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/getRejected", checkAuth, async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const rejectedDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "rejected" }],
    });
    if (rejectedDoc[0] == null) {
      return res
        .status(404)
        .json({ message: "Cannot find rejected documents" });
    }
    res.status(200).json(rejectedDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getWaiting", checkAuth, async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const waitingDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "waiting" }],
    });
    if (waitingDoc[0] == null) {
      return res.status(404).json({ message: "Cannot find waiting documents" });
    }
    res.status(200).json(waitingDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getDms", checkAuth, async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const dmsDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "dms" }],
    });
    if (dmsDoc[0] == null) {
      return res.status(404).json({ message: "Cannot find waiting documents" });
    }
    res.status(200).json(dmsDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getMoph", checkAuth, async (req, res) => {
  const user_uid = req.query.uid;
  try {
    // const user = await users.find({ uid: user_uid });
    const mophDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "moph" }],
    });
    if (mophDoc[0] == null) {
      return res.status(404).json({ message: "Cannot find waiting documents" });
    }
    res.status(200).json(mophDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getApproved", async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req query : ", req.query);
  try {
    // const user = await users.find({ uid: user_uid });
    const approvedDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "approved" }],
    });
    if (approvedDoc[0] == null) {
      return res
        .status(400)
        .json({ message: "Cannot find approved documents" });
    }
    res.status(200).json(approvedDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
