import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subject", SubjectSchema);
