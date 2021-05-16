import React from "react";
import styles from "../Profile.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className={styles.content_background}
        src="https://i.pinimg.com/originals/69/bb/3b/69bb3bb7e60ae6a7c1665cfc751730be.jpg"
        alt="background_img"
      />
      <div>ava+desc</div>
    </div>
  );
};

export default ProfileInfo;
