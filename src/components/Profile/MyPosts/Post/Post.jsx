import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.userAvatar}
        src="https://station.ru/uploads/d0/73/c73a188c1d57501a5c58738cfce8.jpg"
        width="50"
        height="50"
      />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
