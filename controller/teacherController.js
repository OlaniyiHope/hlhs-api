import Te from "../models/teModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const { username, email, password } = req.body;
  const user = await Te.create({
    email,
    password: hash,
    username,
  });
  if (user) {
    const { _id, username, email, password } = user;
    res.status(201).json({
      _id,
      username,
      email,
      password,
    });
  } else {
    res.status(400);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await Te.findOne({ email, password });
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

/*export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password, email } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ password, email });
  } catch (err) {
    next(err);
  }
};*/

/*export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate Request
  if (!email || !password) {
    res.status(400);
  }

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
  }

  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //   Generate Token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user && passwordIsCorrect) {
    const { _id, username, email, password } = user;
    res.status(200).json({
      _id,
      username,
      email,
      password,
    });
  } else {
    res.status(400);
  }
};*/
export const getUsers = async (req, res, next) => {
  try {
    const users = await Te.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
export const getallUsers = async (req, res, next) => {
  try {
    const users = await Te.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
