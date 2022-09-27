const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");

// @desc get single suggestion
// @route GET /api/feedback/:id
// @access Private (user is already logged in when they hit this route).
const getSuggestion = asyncHandler(async (req, res) => {
  const suggestion = await Feedback.findById(req.params.id);

  if (!suggestion) {
    res.status(404);
    throw new Error("Suggestion not found");
  }

  res.status(200).json(suggestion);
});

// @desc get all suggestions
// @route GET /api/feedback
// @access Private (user is already logged in when they hit this route).
const getSuggestions = asyncHandler(async (req, res) => {
  const suggestions = await Feedback.find(req.body);
  res.status(200).json(suggestions);

  //   if (!suggestions) {
  //     res.status(400);
  //     throw new Error("Not Authorized");
  //   }
});

// @desc add suggestion
// @route POST /api/feedback/add-feedback
// @access Private (user is already logged in when they hit this route).
const addSuggestion = asyncHandler(async (req, res) => {
  const { title, category, description } = req.body;

  console.log(title, category, description);

  if (!title || !category || !description) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  const suggestion = await Feedback.create({
    title,
    category,
    description,
  });

  res.status(201).json(suggestion);
});

// @desc Update upvote count
// @route PUT /api/feedback
// @access Private (user is already logged in when they hit this route).
const updateUpvoteCount = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const suggestion = await Feedback.findById(req.params.id);

  if (!suggestion) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  res.send(suggestion);
  // Look up specific suggestion
  // find out if user already upvoted
  // update count by 1
});

module.exports = {
  getSuggestion,
  getSuggestions,
  addSuggestion,
  updateUpvoteCount,
};
