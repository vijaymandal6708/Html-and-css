const express = require("express");
const app = express();
const stuRoute = require("./routes/stuRoute");
const empRoute = require("./routes/empRoute");

app.set("view engine", "ejs")

app.use("/students", stuRoute);
app.use("/employees", empRoute);

app.listen(9000, ()=>{
    console.log("Server is running on port 9000")
})