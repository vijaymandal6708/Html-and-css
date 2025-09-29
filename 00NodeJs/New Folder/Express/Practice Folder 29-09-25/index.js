const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const mongoose = require("mongoose");

app.use("/students", studentRoute);

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/newstudents")

app.listen(9001, ()=>{
    console.log("Server is running on port 9001!")
});