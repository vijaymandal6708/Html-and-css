const http = require("http");
const MyModule = require("./newcybrom");

http.createServer((req,res)=>{
    res.write(MyModule.MyDate());
    res.write(MyModule.MyCity());
    res.end("server end");
}).listen(8500, ()=>{
    console.log("server run on port 8500");
})