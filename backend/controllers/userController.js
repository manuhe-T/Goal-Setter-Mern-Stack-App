const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc   Register new User
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  res.json({ msg: 'Register User' });
});

// @desc   Authenticate a User
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: 'Login User' });
});

// @desc   Get User Data
// @route  GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ msg: 'User data' });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
