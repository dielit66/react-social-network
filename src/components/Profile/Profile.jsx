import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts postData={props.postData} addNewPost={props.addNewPost} />
    </div>
  );
};

export default Profile;
