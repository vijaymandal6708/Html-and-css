const http = require("http");
const MyClass = require("./cybrom2");

http.createServer((req,res)=>{
    res.write("<h1>This is node app</h1>");
    res.write(`<h2>${MyClass.MyCollege()}</h2>`);
    res.write(`<h2>${MyClass.MyFees()}</h2>`);
    res.end("Server end successfully");
}).listen(1000, ()=>{
    console.log("server started at port 1000")
})