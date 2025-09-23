const homePage = ()=>{
    res.send("Employees Home page")
}

const aboutPage = ()=>{
    res.send("Employees About page")
}

const designationPage = ()=>{
    res.send("Employees Designation page")
}

const departmentPage = ()=>{
    res.send("Employees Department page")
}

const salaryPage = ()=>{
    res.send("Employees Salary page")
}

module.exports = {
    homePage,
    aboutPage,
    departmentPage,
    designationPage, 
    salaryPage
}