import Stu from "../models/stuModel.js";
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
  const {
    student_name,
    classname,
    address,
    password,
    parents_name,
    contact_no,
    gender,
    age,
    email,
    registration_fees,
  } = req.body;

  // (await Student.aggregate({ "$max": '$roll_no', classname: classname }))
  // console.log('student_info is', student_info)

  const user = await Stu.create({
    student_name,
    password: hash,
    classname,
    address,
    parents_name,
    contact_no,
    gender,
    password,
    age,
    email,
    registration_fees,
  });
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
  if (user) {
    const { _id, student_name, email, password } = user;
    res.status(201).json({
      _id,
      student_name,
      email,
      token,
      password,
    });
  } else {
    res.status(400);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await Stu.findOne({ email, password });
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
// the following route is for loading attendance and students info.
export const Class = async (req, res) => {
  const students = await studentAttendanceModel.findOne({
    attendance_date: new NepaliDate().format("YYYY-MM-D"),
    classname: req.params.id,
  });
  // console.log("students",students.length())
  if (students) {
    console.log(students);

    res.json(students);
  } else {
    res.status(404).json({ message: "No students found." });
  }
};
// the following route is for loading attendance and students info.
export const allClass = async (req, res) => {
  const students = await Stu.find({ classname });
  if (students.length > 0) {
    console.log(students);

    res.json(students);
  } else {
    res.status(404).json({ message: "No students found." });
  }
};
export const deleteStudent = async (req, res) => {
  const student = await Stu.findById(req.params.id);
  if (student) {
    await student.remove();
    const total_students = (await Stu.find()).length;
    await Dashboard.findOneAndUpdate(
      { title: "Students" },
      { number: total_students }
    );
    res.json({ message: "Student removed" });
  } else {
    res.status(404);
    throw new Error("student not found");
  }
};
//following route is for searching the students with the given name ,class and roll no
export const Search = async (req, res) => {
  console.log(req.params.name, req.params.class, req.params.roll_no);
  const student = await Stu.findOne({
    student_name: capitalize(req.params.name),
    classname: capitalize(req.params.class),
    roll_no: parseInt(req.params.roll_no),
  });
  console.log(student);

  if (student) {
    res.json(student);
  } else {
    res.status(404);
    res.json({ message: "No student found with the given information." });
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
    const users = await Stu.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
export const getallUsers = async (req, res, next) => {
  try {
    const users = await Stu.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
export const getuserClass = async (req, res, next) => {
  try {
    const users = await Stu.find({ classname: "js1" });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
export const getuserClass2 = async (req, res, next) => {
  try {
    const users = await Stu.find({ classname: "js2" });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
