const mongoose=require("mongoose");


const patientSchema = new mongoose.Schema({

    name :{
        type :String,
        required : true
    },
    lname :{
        type : String ,
        required: true

    },
    email:{
        type :String,
        required : true
    },
    password:{
        type :String,
        required : true
    },
    phoneN :{

        type : Number,
    },
    photo :{

        type : String,
    },
    emailToken:{
        type: String,
        
    },
    isVerified:{
        type:Boolean
    },
    ispatient:{
        type: Boolean,
        default: true
    }


    
} ,{
    timesstamps :true
})
module.exports = mongoose.model("Patient", patientSchema);