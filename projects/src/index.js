import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";



connectDB()



// import mongoose from "mongoose";

// (async () =>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     }
//     catch (error) {
//     console.log("Error:", error);
//     throw error;
//   }
// })()