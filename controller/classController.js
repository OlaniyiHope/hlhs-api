import Class from "../models/classModel.js";
import express from "express";
export const createClass = async (req, res, next) => {
  const newClas = new Class(req.body);
  try {
    const savedClas = await newClas.save();
    res.status(200).json(savedClas);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET CATEGORY
export const getClass = async (req, res) => {
  try {
    const clas = await Class.find();
    res.status(200).json(clas);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getsingleClass = async (req, res, next) => {
  try {
    const classes = await Class.findById(req.params.id);
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
};
export const deleteClass = async (req, res, next) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json("Class has been deleted.");
  } catch (err) {
    next(err);
  }
};
