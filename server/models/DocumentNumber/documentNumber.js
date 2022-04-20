import mongoose from "mongoose";

const documentNumberSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
  count: {
    type: Number,
    required: false,
  },
  month: {
    type: Number,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
});

//this is type name
export default mongoose.model("documentnumbers", documentNumberSchema);
