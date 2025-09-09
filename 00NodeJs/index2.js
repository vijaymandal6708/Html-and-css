const http = require("http");
const myClass = require("./cybrom");
const uc = require("uppercase");
// import of uc module     // first we have installed npm i uppercase 

http.createServer((req,res)=>{
    res.write("welcome to my node app");
    res.write(myClass.myCollege());
    res.write("<h1>HelLo</h1>");
    res.write("</br>");
    res.write(uc("HelLo"));   // how to use uc ... 
    res.end("server end..");
}).listen(9000, ()=>{
    console.log("server run on port 9000");
}) 
