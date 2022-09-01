const asyncHandler = require("express-async-handler");

// @desc Register a new user
// @route /users
// @access Public
function registerUser(req, res) {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  } else {
    res.status(201).send(req.body);
  }
}

const wrappedRegister = asyncHandler(registerUser);

// @desc Register a new user
// @route /users/login
// @access Public
function loginUser(req, res) {
  const { email, password } = req.body;

  // Validation
}

const wrappedLogin = asyncHandler(loginUser);

module.exports = { wrappedRegister, wrappedLogin };
