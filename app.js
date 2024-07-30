const express =require("express");
const app =express();
const userRouter=require('./src/routers/userrouter');
const appRouter=require('./src/routers/appRouter');
app.use(express.json());
const cors=require("cors");
app.use(cors());

app.use("/api/h1",userRouter);
app.use("/api/h1",appRouter);


module.exports=app;
