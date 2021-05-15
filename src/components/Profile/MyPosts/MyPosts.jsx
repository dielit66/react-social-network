import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <Post message={"Hey!How're u?"} likesCount={"1"} />
      <Post message={"Hi! I'm fine"} likesCount={"38"} />
      <Post message={"What's going on here?"} likesCount={"18"} />
      <Post message={"XD"} likesCount={"11"} />
    </div>
  );
};

export default MyPosts;
