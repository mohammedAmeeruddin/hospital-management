const {getUserfromid}=require("./src/services/userservices");
const respo=require("./src/util");
const jwt =require("jsonwebtoken");

exports.authMiddle=async(req,res,next)=>{
    try {
        const {token}=req.headers;
        if(!token){return respo(res,404,'invalid token')};
        const {id}=await jwt.verify(token,process.env.jwt_string);
        if(!id){return respo(res,400,'user not found for this id')};
        const user =await getUserfromid(id);
        req.user=user;
        next();
    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};