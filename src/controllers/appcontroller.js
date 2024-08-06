const { ROLES } = require("../../constants");
const appointment=require("../models/appointmentmodel");
const {respo} =require("../util");


exports.appointmentbooking=async(req,res)=>{
    try {
        const {dateadded,timeadded,docterid}=req.body;
        if(!dateadded || !timeadded || !docterid){
            return respo(res,400,'please fill all the details')};
        const bookedby=req.user._id;
        if(req.user.role !="PATIENT"){
            return respo(res,403,'docters are not allowed to book the appointment')};
        const isappointmentSlotAvailable=await appointment.find({dateadded,timeadded,docterid});
        if(isappointmentSlotAvailable.length>0){
            return respo(res,403,'docter is not available at this time')};
            const newAppointment=await appointment.create({dateadded,timeadded,docterid,bookedby});
            console.log(newAppointment);
            return respo(res,200,newAppointment);

    } catch (error) {
        const message=error?.message;
        return respo(res,500,message);};
};

exports.getallappointments=async(req,res)=>{
    try {
        let appointments;
        if(req.user.role == "DOCTER"){
            appointments=await appointment.find({docterid:String(req.user._id)});};
            if(req.user.role == "PATIENT" ){
                appointments=await appointment.find({bookedby:String(req.user._id)});};
                return respo(res,200,appointments);
    } catch (error) {
        const message=error?.message;
    return respo(res,500,message);}
};

exports.getTimings=async(req,res)=>{
    try {
        if(req.user.role !="PATIENT"){
            return respo(res,403,'docters are not allowedd to featch the resores');};
            const {docterid,timeadded}=req.query;
            const timings=await appointment.find({docterid,timeadded});
            const newtimings=[];
            if(timings.length>0){
                for(let i=0;i<=timings.length;i++){
                    newtimings.push(timings[i]?.timeadded)};};
                    return respo(res,200,newtimings);
    } catch (error) {
        const message =reeor?.message;
    return respo(res,500,message);};
};


