import express from "express";
import {
  createExamlist,
  deleteExamlist,
  getExamlist,
  getsingleExamlist,
} from "../controller/examlistController.js";

const router = express.Router();

//CREATE
router.post("/", createExamlist);
router.delete("/:id", deleteExamlist);

router.get("/", getExamlist);
router.get("/find/:id", getsingleExamlist);

export default router;
