const mongoose=require("mongoose");


const doctorSchema = new mongoose.Schema({

    name :{
        type :String,
        required : true
    },
    lname :{
        type : String ,
        required: true

    },
    birth :{
        type : String ,
      
    },
    about :{
        type : String ,
       

    },
    cabinetname :{
        type : String ,
       
    },
    cabinetadresse:{
        type : String ,
      

    },
    adresseline1:{
        type : String ,
       

    },
    adresseline2:{
        type : String ,
       

    },
    city:{
        type : String ,
       

    },
    Sttate:{
        type : String ,
      

    },
    Country:{
        type : String ,
       
    },

    postalcode:{
        type : String ,

    },
    Degree:{
        type : String ,
       

    },
    College:{
        type : String ,
       

    },
    annee :{
        type : String ,
       

    },
    Hospital:{
        type : String ,
     

    },
    From:{
        type : String ,
       

    },
    To :{
        type : String ,
       

    }, 
    Designation:{
        type : String ,
       

    },

    Awards:{
        type : String ,
     

    },
    anneeAward:{
        type : String ,
        
    },
    Memberships:{
        type : String ,
       
    },

    Registrations :{
        type : String ,
     
    },

    anneeregistration :{
        type : String ,
        
    },

    email:{
        type :String,
        required : true
    },
    password:{
        type :String,
        required : true
    },

    isDoctor :{
        type : Boolean,
        default : true
    },

    phoneN :{

        type : Number,
    },

    photo :{

        type : String,
    },

    
    
    
} ,{
    timesstamps :true
})
module.exports = mongoose.model("Doctor", doctorSchema);