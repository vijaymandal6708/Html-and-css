const express = require("express");
const app = express();
const stuRoute = require("./routes/stuRoute");
const empRoute = require("./routes/empRoute");

app.use("/students", stuRoute);
app.use("/employees", stuRoute);

app.listen(9000, ()=>{
    console.log("Server is running on port 9000")
})