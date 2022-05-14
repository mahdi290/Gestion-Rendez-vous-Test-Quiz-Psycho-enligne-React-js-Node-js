const express = require("express");
const router = express.Router();

// Controller

const {appointment,getApoitmentByDoctor,acceptApointments,cancelApointments,getAcceptedByDoctor} = require("../controllers/book");

//routes
router.post("/reservation/", appointment);
router.get("/getapoitmentbydoctor/:id", getApoitmentByDoctor);
router.put("/acceptApointments/:id",acceptApointments);
router.put("/cancelApointments/:id",cancelApointments);
router.get("/getAcceptedByDoctor/:id", getAcceptedByDoctor);



module.exports = router;