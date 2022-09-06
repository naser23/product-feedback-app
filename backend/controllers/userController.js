const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const verifyUserEmail = require("../services/Email");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // If user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const emailToken = generateEmailToken(user.name);
  console.log(emailToken);

  verifyUserEmail(user.name, user.email, emailToken);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Register a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const user = await User.findOne({ email });

  // Check if user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @desc Get current user
// @route /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.send("Me");
});

// // @desc Verify Email
// // @route /api/users/me
// // @access Private
// const verifyEmailToken = asyncHandler(async(req, res) => {
//   const findUser = User.findOne({name: req.body.name})
// })

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

function generateEmailToken(username) {
  return jwt.sign({ username }, process.env.EMAIL_SECRET, {
    expiresIn: "1h",
  });
}

module.exports = { registerUser, loginUser, getMe };
