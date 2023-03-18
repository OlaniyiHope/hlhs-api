import express from "express";
import {
  createSubject,
  deleteSubject,
  getsingleSubject,
  getallSubject,
  getSubject,
  getSubject2,
  getSubject3,
  getSubject4,
} from "../controller/subController.js";

const router = express.Router();

//CREATE
router.post("/", createSubject);
router.delete("/:id", deleteSubject);
router.get("/", getallSubject);

router.get("/JS1", getSubject);
router.get("/JS2", getSubject2);
router.get("/JS3", getSubject3);
router.get("/SS1", getSubject4);
router.get("/find/:id", getsingleSubject);

export default router;
