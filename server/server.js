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

var corsOptions = {
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
import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);
import departmentsRouter from "./routes/departments.js"
app.use("/departments",departmentsRouter)

app.listen(port, () => console.log("Server Started at port: ", port));
