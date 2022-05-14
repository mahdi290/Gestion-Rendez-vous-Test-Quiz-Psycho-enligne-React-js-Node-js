const Patient = require("../models/patient");
const bcrypt=require('bcrypt');
const crypto=require('crypto');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const toastr = require('express-toastr');


 var transporter =nodemailer.createTransport({
   service:'gmail',
   auth:{
     user:'ferianimahdi340@gmail.com',
     pass:'Feriani0123'
   },
   tls:{
     rejectUnauthorized:false
   }
 })

exports.clientLogin = async (req, res) => {
    const {email,password} =req.body.userData
    try {
        const patient = await Patient.findOne({email: email}).exec()
        if(patient){
          const match= await bcrypt.compare(password, patient.password)
          if(match){
            res.send(patient)
          }
          else{
            console.log('invalid cerdintionels')
          }
            
        }
        else{
            return res.status(400).json({message:'login failed'})
        }
    } catch (error) {
        return res.status(400).json({error}) 
    }  
};


exports.clientRegister = async (req, res) => {
    console.log(req.body)
    const {name,lname,email,password}=req.body.userData
    
    try{
        const patientt = new Patient({name,lname,email,password,emailToken:crypto.randomBytes(64).toString('hex'),isVerified:false});
        const salt= await bcrypt.genSalt(10)
        const hashPassword =await bcrypt.hash(patientt.password,salt)
        patientt.password=hashPassword
        const newPatient= await patientt.save()
        var mailOption ={
          from: '"verify your email " <ferianimahdi340@gmail.com>',
          to: patientt.email,
          subject: 'psycologie verify your email ',
          html:`<h2>${patientt.name}! thank you for registreting on our website</h2>
          <h4>please verify your email to procced.. </h4>
          <a href="http://${req.headers.host}/api/verify-email?token=${patientt.emailToken}">click here</a>`
        }
        transporter.sendMail(mailOption,function(error,info){
          if(error){
            console.log(error)
          }
          else{
            console.log('verification email sent to your gmail account ')
          }
        })
        res.json(newPatient)
    } catch (error) {
        console.log("heeree")
        return res.status(400).json({error})
        
    }
    
};

exports.verifyEmail = async(req,res) =>{

  try {
    const token =req.query.token
    console.log(token)
    const puser = await Patient.findOne({emailToken: token})
    if (puser){
      puser.emailToken=null
      puser.isVerified=true
      await puser.save()
      toastr("your email is verified succefully")
      res.redirect('http://localhost:3000/')
    }
    else{
      console.log('email is not verified')
    }
  }catch(error){
        console.log(error)
  }
}
exports.upadtePatient = async (req, res) => {
    try {
      console.log(req.body);
      const { email, name, lname, phone, finalImage } = req.body.formValues;
      const duser = await Patient
        .findOneAndUpdate(
          { email: email },
          { name, lname, phoneN: phone, photo: finalImage },
          { new: true }
        )
        .exec();
      res.json(duser);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  };


  exports.getPatient = async (req, res) => {
    try {
      const getpatient = await Patient.findById(req.params.id).exec();
      res.json(getpatient);
      
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  };
  