import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: false,
  },
  project_num: {
    type: String,
    required: false,
  },
  project_name: {
    type: String,
    required: false,
  },
  project_type: {
    type: String,
    required: false,
  },
  budget_year: {
    type: String,
    required: false,
  },
  department_name: {
    type: String,
    required: false,
  },
  budget_resource: {
    type: String,
    required: false,
  },
  sum: {
    type: Number,
    required: false,
  },
  created_date: {
    type: Date,
    required: false,
  },
  modified_date: {
    type: Date,
    required: false,
  },
  approval_status_th: {
    type: String,
    require: false,
  },
  approval_status: {
    type: String,
    require: false,
  },
  document_type: {
    type: String,
    require: false,
  },
  available_status: {
    type: Number,
    required: false,
  },
});

//this is type name
export default mongoose.model("documents", documentSchema);
