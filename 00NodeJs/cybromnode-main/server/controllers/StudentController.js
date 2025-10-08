const StudentModel = require("../models/StudentModel");
const Student = require("../models/StudentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu=await Student.create({rollno,name,city,fees});
    res.send("data saved succesfully");
    
}

const dataDisplay=async(req,res)=>{
    const myData= await Student.find();
    console.log("okk");
    res.send(myData);
}

module.exports={
    createStudent,
    dataDisplay
};