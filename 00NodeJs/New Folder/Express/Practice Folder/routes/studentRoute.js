const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/home", studentController.homePage);
route.get("/datasave", studentController.datasavePage);


module.exports = route;