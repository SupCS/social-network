import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.banner__container}>
        <img
          className={classes.banner}
          src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*"
          alt="profile banner"
        ></img>
      </div>
      <div className={classes.description_block}>
        <img
          className={classes.profilepic}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="profile pic"
        ></img>
        description
      </div>
    </div>
  );
};

export default ProfileInfo;
