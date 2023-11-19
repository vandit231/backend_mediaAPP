import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
//these are all the packages used
const app=express();
app.use(cors());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());



export default app