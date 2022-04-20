import mongoose from "mongoose";

const documentNumberSchema = new mongoose.Schema({
  count: {
    type: String,
    required: false,
  },
  month: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
});

//this is type name
export default mongoose.model("documentnumbers", documentNumberSchema);
