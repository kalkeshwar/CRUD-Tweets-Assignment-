const Post = require("../models/Post.model")

const createPost = async(req,res)=>{
    try {
        const { content, title, userId } = req.body;
        const post = new Post({ content, author: userId,title });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
     }
}

const likePost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        if (!post) throw new Error('Post not found');
        post.likescount += 1;
        await post.save({validateBeforeSave:false});
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET ALL POSTS
const getAllPosts = async(req,res)=>{
    try {
        const {page=1,limit=10}=req.query
        const posts = await Post.find({})
        .sort({createdAt:-1})
        .limit(limit*1)
        .skip((page-1)*limit)
        .exec()
        const count = await Post.countDocuments()
        res.status(200).json({
            posts,
            totalPages: count/limit,
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//GET SPECIFIC USER POSTS
const getPostsByUser = async(req,res)=>{
    try {
        const {page=1,limit=10}=req.query
        const posts = await Post.find({author:req.params.id})
        .sort({createdAt:-1})
        .limit(limit*1)
        .skip((page-1)*limit)
        .exec()
        const count = await Post.countDocuments({author:req.params.id})
        res.status(200).json({
            posts,
            totalPages: count/limit,
            currentPage: page
        })
        
    } catch (error) {
        
    }
}

//DELETE POST
const deletePost = async(req,res)=>{
    try {
        const {id}= req.params
        const post = await Post.findByIdAndDelete(id)
        res.status(200).json({
            message: "Post deleted successfully",
            post
        })
    } catch (error) {
        res.status(500).json({message:"something went wrong while deleting the post!! "})
    }
}

module.exports = {createPost,likePost,getAllPosts,getPostsByUser,deletePost}