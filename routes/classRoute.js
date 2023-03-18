import express from "express";
import {
  createClass,
  deleteClass,
  getClass,
  getsingleClass,
} from "../controller/classController.js";

const router = express.Router();

//CREATE
router.post("/", createClass);
router.delete("/:id", deleteClass);

router.get("/", getClass);
router.get("/find/:id", getsingleClass);

export default router;
