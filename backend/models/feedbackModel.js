const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title for your suggestion"],
    },
    category: {
      type: String,
      required: [true, "Please pick a catgegory for your Suggestion"],
    },
    details: {
      type: String,
      required: [true, "Please add a Description for your suggestion"],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("suggestions", feedbackSchema);
