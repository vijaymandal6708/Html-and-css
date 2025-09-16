const express = require("express");
const app = express();
const empRoute = require("./routes/empRoute");

app.use("/employees", empRoute);

app.listen(9000, ()=>{
    console.log("9000 port")
})