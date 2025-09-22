const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Cybrom")
})

app.get("/about", (req, res)=>{
    res.send("Welcom to Cybrom Bhopal")
})

app.get("/service", (req, res)=>{
    res.send("Our Services")
})

app.get("/join", (req, res)=>{
    res.send("Join us Page")
})

app.get("/contact", (req, res)=>{
    res.send("Contact Us Page")
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})