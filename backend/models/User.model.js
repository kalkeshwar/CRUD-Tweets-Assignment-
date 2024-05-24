const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    ProfilePicture:{
        type:String,
    },
    followersCount:{
        type:Number,
        default:0
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    followingCount:{
        type:Number,
        default:0
    },
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    refreshToken:{
        type:String,
    },
    refreshTokenExpiresAt:{
        type:Date,
    },
    Posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
},{timestamps:true})

module.exports = mongoose.model("Users",userSchema)