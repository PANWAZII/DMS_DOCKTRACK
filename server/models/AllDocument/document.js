import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  uid: {
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
  quantity: {
    type: Number,
    required: false,
  },
  unit: {
    type: String,
    required: false,
  },
  price_unit: {
    type: Number,
    required: false,
  },
  sum: {
    type: Number,
    required: false,
  },
  method: {
    type: String,
    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  cert: {
    type: String,
    required: false,
  },
  list_old: {
    type: String,
    required: false,
  },
  locate_old: {
    type: String,
    required: false,
  },
  year_old: {
    type: String,
    required: false,
  },
  obstacle: {
    type: String,
    required: false,
  },
  purpose_of_use: {
    type: String,
    required: false,
  },
  compare: {
    type: String,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  quantity_major: {
    type: Number,
    required: false,
  },
  specific_info: {
    type: String,
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
