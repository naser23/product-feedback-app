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
      type: text,
      required: [true, "please add some text"],
    },

    isReply: {
      type: Boolean,
      required: false,
      default: false,
    },

    replies: {
      type: Array,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
