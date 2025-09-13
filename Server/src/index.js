// const express = require("express") cuz i add type module in package.json

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoutes);

app.listen(PORT, ()=>{
    console.log("server is running on post "+PORT);
    connectDB();
})