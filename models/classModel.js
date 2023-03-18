import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Class", ClassSchema);
