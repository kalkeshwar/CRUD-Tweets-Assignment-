const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
    },
    likescount:{
        type:Number,
        default:0
    },
    
})

module.exports = mongoose.model("Posts",postSchema)