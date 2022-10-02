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

  const comments = await Comment.find(req.body);
  res.status(200).json(comments);
});

const createComment = asyncHandler(async (req, res) => {
  const { text } = req.body;

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

  if (!text) {
    res.status(400);
    throw new Error("Please type a comment");
  }

  const newComment = await Comment.create({
    text,
    user: req.user.id,
    name: user.name,
    username: user.username,
    feedback: req.params.id,
  });

  res.status(201).json(newComment);
});

module.exports = { getComments, createComment };
