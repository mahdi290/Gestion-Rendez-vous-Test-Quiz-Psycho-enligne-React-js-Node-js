const express = require("express");
const router = express.Router();





// Controller

const { addNewquestion} = require("../controllers/quiz");

//routes
router.post("/addtest", addNewquestion);







module.exports = router;