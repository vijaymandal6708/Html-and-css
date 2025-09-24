const homePage = (req, res)=>{
    res.render("emphome");
}

const aboutPage = ()=>{
    res.render("empabout");
}

const designationPage = ()=>{
    res.render("empdesignation");
}

const departmentPage = ()=>{
    res.render("empdepartment");
}

const salaryPage = ()=>{
    res.render("empsalary");
}

module.exports = {
    homePage,
    aboutPage,
    departmentPage,
    designationPage, 
    salaryPage
}