const studentModel = require("../models/studentModel");

const homePage = (req, res)=>{
   res.render("home");
}


module.exports = {
    homePage
}