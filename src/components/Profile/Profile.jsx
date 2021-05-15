import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <img
        className="content_background"
        src="https://i.pinimg.com/originals/69/bb/3b/69bb3bb7e60ae6a7c1665cfc751730be.jpg"
        alt="background_img"
      />
      <div>ava+desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
