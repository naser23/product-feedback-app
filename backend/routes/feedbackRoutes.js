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

// Re Route into notes router
router.use("/:id/comments", commentRouter);
router
  .route("/:id")
  .get(protect, getSuggestion)
  .put(protect, updateUpvoteCount);

module.exports = router;
