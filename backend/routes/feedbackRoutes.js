const express = require("express");
const router = express.Router();
const {
  getSuggestions,
  addSuggestion,
} = require("../controllers/feedbackController");

router.get("/", getSuggestions);
router.post("/add-feedback", addSuggestion);

module.exports = router;
