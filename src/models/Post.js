import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      requred: true,
    },
    desc: {
      type: String,
      unique: true,
      requred: true,
    },
    img: {
      type: String,

      requred: true,
    },
    content: {
      type: String,

      requred: true,
    },
    username: {
      type: String,

      requred: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models("Post", postSchema);
