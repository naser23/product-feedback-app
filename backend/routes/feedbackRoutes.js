const express = require("express");
const router = express.Router();
const commentRouter = require("./commentRoutes");
const { protect } = require("../middleware/authMiddleware");
const {
  getSuggestion,
  getSuggestions,
  addSuggestion,
  updateUpvoteCount,
} = require("../controllers/feedbackController");

router.route("/").get(protect, getSuggestions);
router.route("/add-feedback").post(protect, addSuggestion);

router
  .route("/:id")
  .get(protect, getSuggestion)
  .put(protect, updateUpvoteCount);

// Re Route into notes router
router.use("/:id/comments", commentRouter);

module.exports = router;
