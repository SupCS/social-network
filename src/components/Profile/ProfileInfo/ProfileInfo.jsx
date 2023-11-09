import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div className={classes.banner__container}>
        <img
          className={classes.banner}
          src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*"
          alt="profile banner"
        ></img>
      </div> */}
      <div className={classes.description_block}>
        <img src={props.profile.photos.large} alt="profile pic" />
        <ProfileStatus status={"Hello my friend"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
