const book = require("../models/book");
var sid  = "AC84adcb8715ca8c643d9f3e539aa77d79"
var auth_token ="2a75ef3b06c4a333cadde798fc0f31a7"

var twilio = require("twilio")(sid,auth_token)

exports.appointment = async (req, res) => {
  console.log(req.body);
  const { formValues } = req.body;
  try {
    const reserv = await new book({
      appointmentDate: formValues.appointmentDate,
      Telephone: formValues.Telephone,
      Doctor: req.body.doctorId,
      Patient: req.body.userId,
    }).save();
    res.json(reserv);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

exports.getApoitmentByDoctor = async (req, res) => {
  console.log(req.params);

  try {
    
      const getApoit = await book.find({Doctor:req.params.id,appointmentStatus:{ "$in": ["pending", "accepted"]}}).populate("Patient").exec()
      
      res.json(getApoit)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
exports.getAcceptedByDoctor = async (req, res) => {
  console.log(req.params);

  try {
    
      const getAccept = await book.find({Doctor:req.params.id,appointmentStatus:{ "$in": ["accepted"]}}).populate("Patient").exec()
      
      res.json(getAccept)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

exports.acceptApointments = async(req,res) =>{
try {
  console.log(req.params.id)
  const updateBook = await book.findOneAndUpdate({Patient:req.params.id},{appointmentStatus:"accepted"},{new:true}).exec()
  res.json(updateBook) 
  twilio.messages.create({
    from:"+16062689863",
    to: "+21650963367",
    body:"your appointment has benn accepted "
  }).then((res)=> console.log('message sent ')).catch((err)=>{console.log(err)})
} catch (error) {
      console.log("zeae")

    console.log(error)
}

}

exports.cancelApointments = async(req,res) =>{
  try {
    const Cancelbook = await book.findOneAndUpdate({Patient:req.params.id},{appointmentStatus:"rejected"},{new:true}).exec()
    res.json(Cancelbook) 
  } catch (error) {
     console.log(error)
  }
  
  }


