const express = require("express");
const route = express.Router();

route.get("/", (req,res)=>{
    res.send("this is student page");
});

route.get("/insert", (req,res)=>{
    console.log(req.body);
    res.send("this is student page");
});

module.exports = route;