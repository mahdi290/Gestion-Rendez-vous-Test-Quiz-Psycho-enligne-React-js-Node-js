const express = require("express");
const router = express.Router();

// Controller

const { doctorLogin, doctorRegister,upadteDoctor,getalld,getdocByid, deletedoctor,acceptAccount,getalladmin } = require("../controllers/doctor");

//routes
router.post("/dregister/", doctorRegister);
router.post("/dlogin/", doctorLogin);
router.put("/updoctor/",upadteDoctor);
router.get("/getall",getalld);
router.get("/getalladmin",getalladmin);
router.get("/getdoctor/:id",getdocByid);

router.post("/deletedoctor/:id",deletedoctor);

router.put("/acceptAcount/:id",acceptAccount);
//exports
module.exports = router;
