const User =require("../models/usermodel");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt");

const { respo } = require("../util");
const { ROLES } = require("../../constants");


exports.signupUser=async(req,res)=>{
    try {
        const{email,password,name,role}=req.body;
        if(!email || !password || !name || !role){
            return respo(res,400,'please fill the details');};
            if(!ROLES.includes(role)){
                return respo(res,404,'roles is not matching')
            }
        const encryptpassword = await bcrypt.hash(password,12);
        const user=await User.create({email,password:encryptpassword,name,role})
        return respo(res,200,user);

    } catch (error) {
        const message=error?.message;
        return respo(res,500,message)};
};

exports.signinUser=async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email || !password){
            return respo(res,404,'please provide the details ');};
            const user =await User.findOne({email});
            if(!user){return respo(res,404,'email is invalid')};
            const ispasswordmatch=await bcrypt.compare(password,user.password);
            if(!ispasswordmatch){return respo(res,404,'invalid password')};
            const token =jwt .sign({id:user._id},process.env.jwt_string);
            return respo(res,200,{user,token});
    } catch (error) {
        const message=error.message;
        return respo(res,500,message)};
};

exports.getusersdata=async(req,res)=>{
    try {
        return respo(res,200,{user:req.user});
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};

exports.getAlldocters=async(req,res)=>{
    try {
    
        const doctors=await User.find({role:"DOCTER"});
       
        return respo(res,200,doctors);
        
    } catch (error) {
        const message=error?.message;
        return respo(res,400,message);};
};

exports.savedocterposition=async(req,res)=>{
    try {
        const {position}=req.body;
        const newUser={
            ...JSON.parse(JSON.stringify(req.user)),
            userdetails:{position}
        };
        const updateUser=await User.findByIdAndUpdate(req.user._id,newUser,{new:true});
        return respo(res,200,updateUser);  
    } catch (error) {
        const message=error?.message;
    return respo(res,500,message)};
};