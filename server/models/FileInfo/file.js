import mongoose from "mongoose";

const fileInfoSchema = new mongoose.Schema({
  document_id: {
    type: String,
    required: true,
  },
  quotation_1: {
    type: String,
    required: true,
  },
  quotation_2: {
    type: String,
    required: true,
  },
  quotation_3: {
    type: String,
    required: true,
  },
  blueprint: { type: String, required: true },
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
export default mongoose.model("fileInfo", fileInfoSchema);
