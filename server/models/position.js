import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  position_name: {
    type: String,
    required: true,
  },
  available_status: {
    type: Number,
    required: true,
  },
//   created_date: {
//     type: Date,
//     required: false,
//   },
//   modified_date: {
//     type: Date,
//     required: false,
//   },
});

//this is type name
export default mongoose.model("positions", userSchema);