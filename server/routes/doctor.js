const express = require("express");
const router = express.Router();

// Controller

const { doctorLogin, doctorRegister,upadteDoctor,getalld,getdocByid } = require("../controllers/doctor");

//routes
router.post("/dregister/", doctorRegister);
router.post("/dlogin/", doctorLogin);
router.put("/updoctor/",upadteDoctor);
router.get("/getall",getalld);
router.get("/getdoctor/:id",getdocByid);


//exports
module.exports = router;
