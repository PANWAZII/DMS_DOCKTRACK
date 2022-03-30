// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
const app = express();
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// const usersRouter = require("./routes/users");

//Public API
import alldocRouter from "./routes/Public/publicApi.js";
app.use("/public", alldocRouter);

//User API
import usersRouter from "./routes/User/users.js";
app.use("/users", usersRouter);
import departmentsRouter from "./routes/User/departments.js";
app.use("/departments", departmentsRouter);
import positionsRouter from "./routes/User/positions.js";
app.use("/positions", positionsRouter);

//Documents API
import documentsRouter from "./routes/AllDocument/documents.js";
app.use("/documents", documentsRouter);

//Dropdown Api
import budgetSourceRouter from "./routes/Dropdown/budgetSources.js";
app.use("/budgetSources", budgetSourceRouter);


//Admin API
import adminsRouter from "./routes/Admin/admins.js";
app.use("/admins", adminsRouter);

//Level checker API
import checkLevelRouter from "./routes/checkLevel.js"
app.use("/auth",checkLevelRouter)

app.listen(port, () => console.log("Server Started at port: ", port));
