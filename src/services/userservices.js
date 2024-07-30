const User=require("../models/usermodel");

exports.getUserfromid=async(id)=>{
    const user=await User.findById(id);
    if(!user){
        throw new error('user not found')
    };
    return user;
};