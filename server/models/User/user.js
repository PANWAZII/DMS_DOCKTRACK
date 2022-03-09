// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position_id: {
    type: String,
    required: true,
  },
  department_id: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  fax: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  available_status: {
    type: Number,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
  modified_date: {
    type: Date,
    required: true,
  },
});

//this is type name
// module.exports = mongoose.model("users", userSchema);
export default mongoose.model("users", userSchema);
