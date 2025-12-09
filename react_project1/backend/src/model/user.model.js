import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        required:true,

    },
    email:{
        type:String,
        match:/.@/,
        require:true,
    },
    password:{
        type:String,
        minLength:6,
        maxLength:12,
        required:true
    }
 },{timestamps:true})

 export const User=mongoose.model("User",UserSchema);