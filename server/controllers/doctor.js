const doctor = require("../models/doctor");

exports.doctorLogin = async (req, res) => {
  const { email, password } = req.body.userData;
  try {
    const doctorLogin = await doctor
      .findOne({ email: email, password: password })
      .exec();
    if (doctorLogin) {
      res.send(doctorLogin);
    } else {
      return res.status(400).json({ message: "login failed" });
    }
  } catch (error) {
    console.log("hna");
    return res.status(400).json({ error });
  }
};

exports.doctorRegister = async (req, res) => {
  console.log(req.body);
  try {
    const newdoctor = await new doctor(req.body.userData).save();
    res.json(newdoctor);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.upadteDoctor = async (req, res) => {
  try {
    console.log(req.body);
    const { email, name, lname, phone,about,cabinetname,cabinetadresse,adresseline1,adresseline2,
      city,Sttate,Country,postalcode,Degree,College,annee,Hospital,From,To,Designation,Awards,
      anneeregistration,anneeAward,Memberships,Registrations,birth,finalImage } = req.body.formValues;
    const duser = await doctor
      .findOneAndUpdate(
        { email: email },
        { name, lname,birth,about,cabinetname,cabinetadresse,adresseline1,adresseline2,
          city,Sttate,Country,postalcode,Degree,College,annee,Hospital,From,To,Designation,Awards,
          anneeAward,Memberships,Registrations,anneeregistration ,phoneN: phone, photo: finalImage },
        { new: true }
      )
      .exec();
    res.json(duser);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.getalld = async (req, res) => {
  console.log("sdsd");
  try {
    const doctors = await doctor.find().exec();
    res.json(doctors);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
exports.getdocByid = async (req, res) => {
  try {
    const getdocByid = await doctor.findById(req.params.id).exec();
    res.json(getdocByid);
    
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
};