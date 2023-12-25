import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const toggleEditMode = () => {
    if (props.isOwner) {
      setEditMode(!editMode);
    }
  };

  const handleBlur = () => {
    if (editMode) {
      props.updateStatus(status);
      setEditMode(false);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={handleBlur}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      ) : (
        <div>
          <b>Status: </b>
          <span onDoubleClick={toggleEditMode}>
            {status ||
              (props.isOwner
                ? "Hello, that's a default status! Double Click to change"
                : "No status yet")}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
