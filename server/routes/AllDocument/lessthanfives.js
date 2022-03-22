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

router.get("/getMyDoc", async (req, res) => {
  const uid = req.query.uid;
  if (!uid) {
    res.status(400);
    return;
  }
  try {
    // const user = await users.find({ uid: user_uid });
    const myDoc = await lessthanfivems.find({ uid: uid });
    if (myDoc[0] == null) {
      return res.status(200).json();
    }
    res.status(200).json(myDoc);
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
    approval_status: "new",
    approval_status_th: "รอรับเข้าระบบ",
    available_status: 1,
  };
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

router.get("/getBudgetYear", async (req, res) => {
  let date = new Date();
  const currentYear = date.getFullYear();
  const currentThaiYear = currentYear + 543;
  let data = [];
  for (let index = 0; index < 3; index++) {
    const year = currentThaiYear + index;
    data.push({
      year: year
  });
  }
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getRejected", async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const rejectedDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "rejected" }],
    });
    if (rejectedDoc[0] == null) {
      return res.status(200).json();
    }
    res.status(200).json(rejectedDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getWaiting", async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const waitingDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "waiting" }],
    });
    if (waitingDoc[0] == null) {
      return res.status(200).json();
    }
    res.status(200).json(waitingDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getDms", async (req, res) => {
  const user_uid = req.query.uid;
  console.log("req user : ", user_uid);
  try {
    // const user = await users.find({ uid: user_uid });
    const dmsDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "dms" }],
    });
    if (dmsDoc[0] == null) {
      return res.status(200).json();
    }
    res.status(200).json(dmsDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getMoph", async (req, res) => {
  const user_uid = req.query.uid;
  try {
    // const user = await users.find({ uid: user_uid });
    const mophDoc = await lessthanfivems.find({
      $and: [{ uid: user_uid }, { approval_status: "moph" }],
    });
    if (mophDoc[0] == null) {
      return res.status(200).json();
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
      return res.status(200).json();
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