import express from "express";
import {
  getallUsers,
  getUsers,
  loginUser,
  register,
} from "../controller/teacherController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/getusers", getUsers);
router.get("/getallusers/:id", getallUsers);

export default router;
