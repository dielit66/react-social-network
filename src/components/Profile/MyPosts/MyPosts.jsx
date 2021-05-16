import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

let postData = [
  { id: 1, message: "Hey! How re you?", likesCounter: 1 },
  { id: 2, message: "Hi! I'm fine?", likesCounter: 38 },
  { id: 3, message: "What's going on here?", likesCounter: 18 },
  { id: 4, message: "XD", likesCounter: 11 },
];

const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post
        message={postData[0].message}
        likesCount={postData[0].likesCounter}
      />
      <Post
        message={postData[1].message}
        likesCount={postData[1].likesCounter}
      />
      <Post
        message={postData[2].message}
        likesCount={postData[2].likesCounter}
      />
      <Post
        message={postData[3].message}
        likesCount={postData[3].likesCounter}
      />
    </div>
  );
};

export default MyPosts;
