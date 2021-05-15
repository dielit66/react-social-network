import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <img
        className="content_background"
        src="https://i.pinimg.com/originals/69/bb/3b/69bb3bb7e60ae6a7c1665cfc751730be.jpg"
        alt="background_img"
      />
      <div>ava+desc</div>
      <div>
        My post
        <div>New post</div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Profile;
