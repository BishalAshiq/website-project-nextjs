import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      requred: true,
    },
    email: {
      type: String,
      unique: true,
      requred: true,
    },
    password: {
      type: String,

      requred: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models("User", userSchema);
