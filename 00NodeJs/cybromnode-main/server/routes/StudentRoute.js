const express=require("express");
const stucontroller = require("../controllers/StudentController");
const router=express.Router();

router.post("/create",stucontroller.createStudent);
router.get("/display",stucontroller.dataDisplay);
router.post("/search",stucontroller.dataSearch);



module.exports=router;