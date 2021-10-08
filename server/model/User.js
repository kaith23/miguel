const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    registeredDate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);
module.exports = mongoose.model("User", userSchema);
