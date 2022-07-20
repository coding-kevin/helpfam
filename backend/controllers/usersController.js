const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/UsersModel");

// POST /users
// Register a new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, userType } = req.body;

  //check for all fields
  if (!name || !email || !password || !userType) {
    res.status(400);
    throw new Error("Please enter a name, email, password, and userType");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }

  //hash the pasword using the plaintext password and the generated salt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user object with provided details
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    userType,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid registration details");
  }
});

// POST login
// User login

const loginUser = asyncHandler(async (req, res) => {
  console.log("LOGIN");
  console.log("REQ BODY", req.body);

  const { email, password } = req.body;
  console.log("EMAIL, PASSWORD", email, password);

  const user = await User.findOne({ email });

  // use bcrypt.compare to compare provided password and hashed password
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("login successful");
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    console.log("error logging in");
    throw new Error("Username or password not correct");
  }
});

// GET /user/
// Get the specified user

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
