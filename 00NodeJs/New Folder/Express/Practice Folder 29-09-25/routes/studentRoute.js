const express = require("express");
const route = express.Router();
const studentController = require("../controller/studentController")

route.get("/", studentController.homePage);

module.exports = route;