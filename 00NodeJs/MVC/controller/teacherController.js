const homePage =(req, res)=>{
    res.render("welcome to home page!!!");
}

const aboutPage =(req, res)=>{
    res.render("welcome to about page!!!");
}

module.exports = {
    homePage,
    aboutPage
}