const express = require("express");
const router = express.Router({ mergeParams: true });
const { getComments } = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getComments);

// /api/feedback/:id/comments

module.exports = router;
