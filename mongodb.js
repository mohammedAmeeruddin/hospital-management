const mongoose =require("mongoose");
const URL=process.env.MONGO_URL;
exports.connectDB=()=>{
    mongoose.connect(URL)
    .then((res)=>console.log(`mongodatabase is connected ${res.connection.host}`))
    .catch((error)=>console.log(`monodb error ${error.message}`))
};