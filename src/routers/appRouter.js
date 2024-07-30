const express=require("express");
const { authMiddle } = require("../../auth");
const {appointmentbooking,getallappointments,getTimings}=require("../controllers/appcontroller");
const Router=express();
Router.post("/appointmentbooking",authMiddle,appointmentbooking);
Router.get("/getallappointment",authMiddle,getallappointments);
Router.get("/getapointmenttiming",authMiddle,getTimings);




module.exports=Router;