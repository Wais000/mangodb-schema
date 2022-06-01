import express from "express";
import { createPosts, getPosts, deletePost, updatePost } from "../controllers/postControllers.js";
const router =express.Router()


// GET request
router.get("/", getPosts )


// POST request
router.post("/", createPosts)

// DELETE request
router.delete("/:id",deletePost)
// update request

router.patch("/:myid",updatePost)
export default router