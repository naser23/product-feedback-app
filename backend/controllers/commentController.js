const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");

// @desc get all suggestions
// @route GET /api/feedback/:id/comments
// @access Private (user is already logged in when they hit this route).
const getComments = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const suggestion = await Feedback.findById(req.params.id);

  if (!suggestion) {
    res.status(404);
    throw new Error("Suggestion not found");
  }

  res.send(suggestion);
});

module.exports = { getComments };
