const express = require("express");
const router = express.Router();
const {
  wrappedRegister,
  wrappedLogin,
} = require("../controllers/userController");

router.post("/", wrappedRegister);
router.post("/login", wrappedLogin);

module.exports = router;
