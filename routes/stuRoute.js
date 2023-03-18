import express from "express";
import {
  allClass,
  Class,
  deleteStudent,
  getallUsers,
  getuserClass,
  getuserClass2,
  getUsers,
  loginUser,
  register,
  Search,
} from "../controller/stuController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/getallusers", getallUsers);
router.get("/clo", getuserClass);
router.get("/clo2", getuserClass2);
router.get("/class/:id/attendance", Class);
router.get("/class/:id", allClass);
router.delete("/delete/:id", deleteStudent);
router.get("/search/:name/:class/:roll_no", Search);
router.get("/getusers/:id", getUsers);

export default router;
