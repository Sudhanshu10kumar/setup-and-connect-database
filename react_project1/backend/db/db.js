import mongoose from "mongoose";
import {DB_Name} from "../constant.js"

import dotenv from "dotenv";
dotenv.config();

const databaseConnect=async()=>{
    try{
        const dbConnectionIntence=await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_Name}`)
    }
    catch(error){
        console.log("Database Connection ERROR!!!!",error);
        
        process.exit(1)
        
    }
}

export  default databaseConnect;