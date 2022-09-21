const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedbackModel");

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
