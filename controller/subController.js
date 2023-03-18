import Subject from "../models/subModel.js";
import express from "express";
export const createSubject = async (req, res, next) => {
  const newSub = new Subject(req.body);
  try {
    const savedSub = await newSub.save();
    res.status(200).json(savedSub);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET CATEGORY
export const getSubject = async (req, res) => {
  try {
    const sub = await Subject.find({ classname: "Js1" });
    res.status(200).json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getallSubject = async (req, res) => {
  try {
    const sub = await Subject.find();
    res.status(200).json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getSubject2 = async (req, res) => {
  try {
    const sub = await Subject.find({ classname: "Js2" });
    res.status(200).json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getSubject3 = async (req, res) => {
  try {
    const sub = await Subject.find({ classname: "Js3" });
    res.status(200).json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getSubject4 = async (req, res) => {
  try {
    const sub = await Subject.find({ classname: "SS1" });
    res.status(200).json(sub);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getsingleSubject = async (req, res, next) => {
  try {
    const subjects = await Subject.findById(req.params.id);
    res.status(200).json(subjects);
  } catch (err) {
    next(err);
  }
};
export const deleteSubject = async (req, res, next) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.status(200).json("Class has been deleted.");
  } catch (err) {
    next(err);
  }
};
