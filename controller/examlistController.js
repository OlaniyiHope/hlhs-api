import Examlist from "../models/examlistModel.js";
import express from "express";

export const createExamlist = async (req, res, next) => {
  const newList = new Examlist(req.body);
  try {
    const list = await newList.save();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET CATEGORY
export const getExamlist = async (req, res) => {
  try {
    const list = await Examlist.find();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getsingleExamlist = async (req, res, next) => {
  try {
    const list = await Examlist.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const deleteExamlist = async (req, res, next) => {
  try {
    await Examlist.findByIdAndDelete(req.params.id);
    res.status(200).json("exam list has been deleted.");
  } catch (err) {
    next(err);
  }
};
