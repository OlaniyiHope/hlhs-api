// following is the es modules declaration style in nodejs
import express from "express";
import adRoutes from "./routes/adRoutes.js";
import classRoute from "./routes/classRoute.js";
import examlistRoute from "./routes/examlistRoute.js";
import gradeRoute from "./routes/gradeRoute.js";
import stuRoute from "./routes/stuRoute.js";
import teRoute from "./routes/teRoute.js";
import subRoute from "./routes/subRoute.js";
import markRoute from "./routes/markRoute.js";
import dotenv from "dotenv";
import connectDB from "./config/db2.js";
import cors from "cors";
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/ad", adRoutes);
console.log(adRoutes);
app.use("/api/class", classRoute);
app.use("/api/examlist", examlistRoute);
app.use("/api/grade", gradeRoute);
app.use("/api/mark", markRoute);
app.use("/api/userrs", stuRoute);
app.use("/api/te", teRoute);
app.use("/api/subject", subRoute);

//the following router is for displaying the class labels

//following route is for displaying the list of students
//according to the classses

//following route will only be used in case the error is encountered.
//FOLLOWING IS THE FALL BACK ROUTE for url not listed in the backend folder

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
