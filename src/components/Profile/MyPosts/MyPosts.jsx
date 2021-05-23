import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "ADD-POST", postText: text });
  };

  let postElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCounter} />
  ));

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button
          onClick={() => {
            addPost();
          }}
        >
          Add Post
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
