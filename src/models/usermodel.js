const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:String,
    createdat:{
        type:Date,
        default:Date.now
    },
    userdetailes:Object,

});

module.exports=mongoose.model("User",Userschema);