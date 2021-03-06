import mongoose from "mongoose";

const fileInfoSchema = new mongoose.Schema({
  document_id: {
    type: String,
    required: false,
  },
  report: { type: String, required: false },
  quotation_1: {
    type: String,
    required: false,
  },
  quotation_2: {
    type: String,
    required: false,
  },
  quotation_3: {
    type: String,
    required: false,
  },
  blueprint: { type: String, required: false },
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
export default mongoose.model("fileInfos", fileInfoSchema);
