import mongoose from "mongoose";

const postSchema=mongoose.Schema({

    title:{type:String, required:true},
    message: String,
    name: String,
    creator: String,
    createdAt:{
        type: Date,
        default: new Date(),
    }
})

const PostModel= mongoose.model("myPost",postSchema)

export default PostModel