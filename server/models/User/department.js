import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  department_name: {
    type: String,
    required: true,
  },
  available_status: {
    type: Number,
    required: true,
  },
  created_date: {
    type: Date,
    required: false,
  },
  modified_date: {
    type: Date,
    required: false,
  },
});

//this is type name
export default mongoose.model("departments", departmentSchema);