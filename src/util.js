exports.respo=(res,statuscode,data)=>{
    return res.status(statuscode).json({data:data});
};