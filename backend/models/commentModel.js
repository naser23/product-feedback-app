const { text } = require("express");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    feedback: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Feedback",
    },

    text: {
      type: String,
      required: [true, "please add some text"],
    },

    isReply: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
