import PostModel from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const result = await PostModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  try {
    const newPost = new PostModel(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      msg: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    await PostModel.findByIdAndRemove(req.params.id);
    res.status(201).json({ msg: "post deleted!!" });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
      console.log("This is req.params.myid: ",req.params.myid);
    const updatePost = await PostModel.findByIdAndUpdate(
      req.params.myid,//3k2l234l23h4k3h
      req.body
    );
    res.status(201).json({ msg: "post updated!!" });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
