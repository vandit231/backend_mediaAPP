import mongoose, { mongo } from "mongoose";
import DB_NAME from "./constants.js";
import dotenv from "dotenv";
import express from "express";
import { error } from "console";
dotenv.config({
    path:"./env"
});
const app=express();
const connectDB=(async()=>{
    try{
       await mongoose.connect("mongodb+srv://vandit:vandit123@cluster0.o5qi5mv.mongodb.net/Social")
       app.on("error",(error)=>{
        console.log(error);
        throw error
       })
    }
    catch(error){
        console.log("error: " ,error);
    }
})()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("server is running ");
    })
})
.catch((error)=>{
    console.log("mongo db connection failed due to:" ,error);
})