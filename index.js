require("dotenv").config({path:".env"});
const app =require("./app");
const {connectDB}=require("./mongodb.js");
const PORT=process.env.PORT;

connectDB();

app.listen(PORT,()=>{
    console.log(`server is connected at ${PORT}`)
}

);