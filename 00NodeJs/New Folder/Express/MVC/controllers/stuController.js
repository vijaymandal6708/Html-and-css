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


module.exports = {
    homePage,
    aboutPage,
    servicesPage,
    contactPage
}