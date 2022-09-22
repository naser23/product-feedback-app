const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");

// @desc get all suggestions
// @route GET /api/feedback
// @access Private
const getSuggestions = asyncHandler(async (req, res) => {
  res.send(req.body);

  // get all suggestions
  // return them
});

// @desc add suggestion
// @route POST /api/feedback/add-feedback
// @access Private
const addSuggestion = asyncHandler(async (req, res) => {
  const { title, category, description } = req.body;

  // find user id in the JWT
  const user = await User.findById(req.user.id);
  console.log(user);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (!title || !category || !description) {
    res.status(400);
    throw new Error("Please include all fields");
  } else {
    const suggestion = await Feedback.create({
      title,
      category,
      description,
    });

    res.status(201).json(suggestion);
  }
});

module.exports = { getSuggestions, addSuggestion };
