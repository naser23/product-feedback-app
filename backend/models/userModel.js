const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },

    username: {
      type: String,
      required: [true, "Please add a username"],
    },

    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    confirmedEmail: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    active: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
