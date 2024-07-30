const mongoose=require("mongoose");

const appointmentSchema=new mongoose.Schema({
    timeadded:String,
    dateadded:String,
    bookedby:String,
    docterid:String,
    createdat:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("appointment",appointmentSchema);