import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: true,
    },

    roll_no: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    parents_name: {
      type: String,
      required: true,
    },
    contact_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    previous_dues: {
      type: Number,
    },
    age: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    registration_fees: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
