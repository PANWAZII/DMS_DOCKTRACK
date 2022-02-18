import mongoose from "mongoose";

const morethanfivemSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: false,
  },
  project_name: {
    type: String,
    required: false,
  },
  department_name: {
    type: String,
    required: false,
  },
  boss_name: {
    type: String,
    required: false,
  },
  boss_position: {
    type: String,
    required: false,
  },
  boss_tel: {
    type: String,
    required: false,
  },
  boss_fax: {
    type: String,
    required: false,
  },
  user2_name: {
    type: String,
    required: false,
  },
  user2_position: {
    type: String,
    required: false,
  },
  user2_tel: {
    type: String,
    required: false,
  },
  user2_fax: {
    type: String,
    required: false,
  },
  user2_email: {
    type: String,
    required: false,
  },
  user3_name: {
    type: String,
    required: false,
  },
  user3_position: {
    type: String,
    required: false,
  },
  user3_tel: {
    type: String,
    required: false,
  },
  user3_fax: {
    type: String,
    required: false,
  },
  user3_email: {
    type: String,
    required: false,
  },
  total: {
    type: String,
    required: false,
  },
  baht_text: {
    type: String,
    required: false,
  },
  resource: {
    type: String,
    required: false,
  },
  detail_notstd: {
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
});

//this is type name
export default mongoose.model("morethanfivems", morethanfivemSchema);
