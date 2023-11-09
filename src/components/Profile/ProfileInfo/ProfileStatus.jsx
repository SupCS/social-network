import React from "react";
import classes from "./ProfileInfo.module.css";
import { useState } from "react";

const ProfileStatus = () => {
  const [editMode, setEditMode] = useState(false);

  const editStatus = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={editStatus}
            value={"Write your new status here"}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={editStatus}>
            Hello, thats a default status! Double Click to change
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
