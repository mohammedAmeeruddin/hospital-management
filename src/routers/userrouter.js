const express=require("express");
const {authMiddle}=require("../../auth");
const {signupUser,signinUser,getusersdata,getAlldocters,savedocterposition}=require("../controllers/usercontroller");
const Route=express();

Route.post('/signupuser',signupUser);
Route.post('/signinuser',signinUser);
Route.get("/getallusers",authMiddle,getusersdata);
Route.get("/getalldocter",authMiddle,getAlldocters);
Route.put("/saveposition",authMiddle,savedocterposition);

module.exports=Route;
