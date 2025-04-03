// @desc   Register new User
// @route  POST /api/users
// @access Public
const registerUser = async (req, res) => {
  res.json({ msg: 'Register User' });
};

// @desc   Authenticate a User
// @route  POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  res.json({ msg: 'Login User' });
};

// @desc   Get User Data
// @route  GET /api/users/me
// @access Public
const getMe = async (req, res) => {
  res.json({ msg: 'User data' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
