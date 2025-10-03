const homePage = (req, res)=>{
    res.render("homepage");
};
const datasavePage = (req, res)=>{
    console.log("<h1>Data saved successfully:</h1>", req.body);

};

module.exports = {
    homePage,
    datasavePage,
}