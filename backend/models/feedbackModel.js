const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title for your suggestion"],
    },
    category: {
      type: String,
      required: [true, "Please pick a catgegory for your Suggestion"],
    },
    description: {
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
