const { getAllPosts, createPost, likePost, getPostsByUser, deletePost } = require("../controllers/post.controller")

const router = require("express").Router()

router.get("/",getAllPosts)
router.post("/createPost",createPost)
router.post("/like/:id",likePost)
router.get("/:id",getPostsByUser)
router.get("/delete/:id",deletePost)

module.exports=router;