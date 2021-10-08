import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fullName: {
    type: String,
    required:[true, ""]
  },

  emailAddress: String,
  contactNumber: Number,
  location: String,
  registeredDate: Date,

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
