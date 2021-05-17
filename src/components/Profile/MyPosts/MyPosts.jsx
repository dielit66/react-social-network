import styles from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post
        message={props.postData[0].message}
        likesCount={props.postData[0].likesCounter}
      />
      <Post
        message={props.postData[1].message}
        likesCount={props.postData[1].likesCounter}
      />
      <Post
        message={props.postData[2].message}
        likesCount={props.postData[2].likesCounter}
      />
      <Post
        message={props.postData[3].message}
        likesCount={props.postData[3].likesCounter}
      />
    </div>
  );
};

export default MyPosts;
