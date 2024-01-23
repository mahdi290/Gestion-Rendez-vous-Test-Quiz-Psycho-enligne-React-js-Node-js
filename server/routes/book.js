const express = require("express");
const router = express.Router();

// Controller

const {appointment,getApoitmentByDoctor,acceptApointments,cancelApointments,getAcceptedByDoctor,getApoitment} = require("../controllers/book");

//routes
router.post("/reservation/", appointment);
router.get("/getapoitmentbydoctor/:id", getApoitmentByDoctor);
router.put("/acceptApointments/:id",acceptApointments);
router.put("/cancelApointments/:id",cancelApointments);
router.get("/getAcceptedByDoctor/:id", getAcceptedByDoctor);
router.get("/getApoitment/", getApoitment);



module.exports = router;