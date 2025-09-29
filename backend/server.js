import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const start=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is Connceted");
    }catch(err){
        console.log(err);
    }
    app.listen(process.env.PORT,()=>{
        console.log(`App Listing on Port ${process.env.PORT}`);
    })

}

start();



