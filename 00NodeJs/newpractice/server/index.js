const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");

app.use("/students", studentRoute);
app.use(cors());

app.listen(9000, ()=>{
    console.log("Server is running on port 9000!");
})