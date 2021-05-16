import React from "react";
import styles from "../Profile.module.css";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <img
        className={styles.content_background}
        src="https://i.pinimg.com/originals/69/bb/3b/69bb3bb7e60ae6a7c1665cfc751730be.jpg"
        alt="background_img"
      />
      <div>
        <img
          className={s.profileAvatar}
          src="https://avatars.mds.yandex.net/get-zen_doc/3530293/pub_5fb51c95d60cd17792de75e1_5fb51c98541585566c04048a/scale_1200"
          alt={"profile avatar"}
        />
        <div>
          <h2>Pavel Durov</h2>
          <p>
            Founder, CEO at Telegram (2013), founder, ex-CEO of VKontakte
            (2006), part-time troll.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
