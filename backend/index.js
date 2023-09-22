import express from "express";
import morgan from "morgan";
import cors from "cors";
import { sql } from "../db.js";


const jwt = require("jsonwebtoken");
require("dotenv").config();

import dotenv from "dotenv";
dotenv.config();

const app = express();

// middleware 
app.use(cors());
app.use(express.json()); // req.body

// ROUTES

// register and login router 
app.use('/auth', require("./routes/jwtAuth"));

// dashboard 
app.use('/dashboard',require('./routes/dashboard'));

// PORT 

const server = app.listen(8081, function () {
    const host = server.address().address;
    const post = server.address().port;
  
    console.log(`App is listening at http://${host}:${post}`);
  });

app.use(
cors({
    origin: ["http://localhost:5173"],
}),

);
app.use(morgan("dev"));
app.use(express.json());
//const port = process.env.PORT || 8000
//app.listen(port, ()=>{console.log(`Your server is listening on ${port}`)})

app.get("/", (req, res) => {
    res.send("Hello world");
  });
  