const express = require("express");
const router = express.Router();
const {
  getSuggestions,
  addSuggestion,
  updateUpvoteCount,
} = require("../controllers/feedbackController");

router.get("/", getSuggestions);
router.post("/add-feedback", addSuggestion);
router.put("/add-feedback", updateUpvoteCount);

module.exports = router;
