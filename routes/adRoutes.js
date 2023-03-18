import express from "express";
import {
  getallUsers,
  getUsers,
  loginUser,
  register,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/getusers/:id", getUsers);
router.get("/getallusers", getallUsers);

export default router;
