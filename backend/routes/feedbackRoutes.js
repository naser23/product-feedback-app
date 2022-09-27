const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const {
  getSuggestion,
  getSuggestions,
  addSuggestion,
  updateUpvoteCount,
} = require("../controllers/feedbackController");

router.get("/", getSuggestions);
router.post("/add-feedback", addSuggestion);

router.route("/:id").get(getSuggestion).put(updateUpvoteCount);

module.exports = router;
