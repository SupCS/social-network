import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import { Link } from "react-router-dom";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      savePhoto(formData);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Saving profile error: ", error);
      });
  };
  return (
    <div>
      <div className={styles.description_block}>
        <div className={styles.photo_block}>
          <img
            src={
              profile.photos.large
                ? `http://localhost:3001${profile.photos.large}`
                : userPhoto
            }
            className={styles.avatar}
            alt="profile pic"
          />
          {isOwner && (
            <>
              <input
                type="file"
                onChange={onMainPhotoSelected}
                className={styles.hiddenFileInput}
                id="fileInput"
              />
              <label htmlFor="fileInput" className={styles.customFileUpload}>
                Upload Photo
              </label>
            </>
          )}
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => setEditMode(true)}
            userId={profile.userId}
          />
        )}
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode, userId }) => {
  return (
    <div>
      <div>
        <b>Full Name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Сontacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          const value = profile.contacts[key];
          return value ? (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ) : null;
        })}
      </div>
      {isOwner && (
        <div>
          <button className={styles.editButton} onClick={goToEditMode}>
            Edit
          </button>
        </div>
      )}
      {!isOwner && (
        <div>
          <Link to={`/dialogs/${profile.id}`}>Chat</Link>
        </div>
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
