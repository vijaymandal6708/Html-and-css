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
    try {
        console.log(req.body);
        await stuModel.create(req.body);
        res.send("<h1>Student data saved successfully</h1>");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving student data");
    }
}

const displayPage = async (req, res)=> {
    try {
        const Student = await stuModel.find();
        res.render("studisplay", { Stu: Student });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching student data");
    }
}

// show empty search form
const searchPage = (req, res)=> {
    res.render("stusearch", { Stu: [] });
}

// search by roll number
const stuPage = async (req, res)=> {
    try {
        const { rollno } = req.body;
        const Student = await stuModel.find({ roll: rollno });
        console.log(Student);
        res.render("stusearch", { Stu: Student });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error searching student data");
    }
}

module.exports = {
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    coursePage,
    dataSave,
    displayPage,
    stuPage,
    searchPage
}
