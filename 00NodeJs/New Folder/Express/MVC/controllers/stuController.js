const stuModel = require("../models/studentModel");

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
    await stuModel.create(req.body);
    res.send("<h1>Student data send successfully</h1>");
}
const displayPage = async (req, res)=> {
    const Student = await stuModel.find();
    res.render("studisplay", {Stu:Student});
}



module.exports = {
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    coursePage,
    dataSave,
    displayPage
}