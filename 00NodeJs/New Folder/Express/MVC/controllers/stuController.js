const stuModel = require("../models/studentModel")

const express = require("express");

const homePage = (req, res)=> {
    res.render("stuhome");
}
const aboutPage = (req, res)=> {
    res.render("stuabout");
}
const servicesPage = (req, res)=> {
    res.render("stuservices");
}
const contactPage = (req, res)=> {
    res.render("stucontact");
}
const coursePage = (req, res)=> {
    res.render("stucourse");
}
const dataSave = async (req, res)=> {
    console.log(req.body);
    res.end("<h1>Student data send successfully</h1>");
    await stuModel.create(req.body);
}


module.exports = {
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    coursePage,
    dataSave
}