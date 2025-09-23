const express = require("express");

const homePage = (req, res)=> {
    return res.send("Home page");
}

module.exports = {
    homePage,
}