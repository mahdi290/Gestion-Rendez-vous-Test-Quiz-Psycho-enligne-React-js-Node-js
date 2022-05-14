const express = require("express");
const router = express.Router();

// Controller

const { clientLogin, clientRegister,upadtePatient,verifyEmail ,getPatient} = require("../controllers/patient");

//routes
router.post("/register/", clientRegister);
router.post("/login/", clientLogin);
router.put("/updtpatient/",upadtePatient);
router.get("/verify-email/",verifyEmail);
router.get("/getpatient/:id",getPatient);


//exports
module.exports = router;


 
