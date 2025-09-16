const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("home page");
})

route.get("/salary", (req, res)=>{
    res.send("salary page");
})

module.exports = route;