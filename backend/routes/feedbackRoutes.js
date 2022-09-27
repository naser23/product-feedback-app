const express = require("express");
const router = express.Router();
const {
  getSuggestions,
  addSuggestion,
  updateUpvoteCount,
} = require("../controllers/feedbackController");

router.get("/", getSuggestions);
router.post("/add-feedback", addSuggestion);

router.route("/:id").put(updateUpvoteCount);

module.exports = router;
