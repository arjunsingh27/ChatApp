import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePicture:{
        type:String,
        default:""
    },
})
const userModel = mongoose.model("User",userSchema);

export default userModel;