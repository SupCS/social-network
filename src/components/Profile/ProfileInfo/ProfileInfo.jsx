import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      {/* <div className={classes.banner__container}>
        <img
          className={classes.banner}
          src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*"
          alt="profile banner"
        ></img>
      </div> */}
      <div className={styles.description_block}>
        <img
          src={profile.photos.large || userPhoto}
          className={styles.avatar}
          alt="profile pic"
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
