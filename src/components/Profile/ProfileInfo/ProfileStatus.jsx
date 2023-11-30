import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const editStatus = () => {
    setEditMode(!editMode);
    if (editMode) {
      props.updateStatus(status);
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
            onBlur={editStatus}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      ) : (
        <div>
          <b>Status: </b>
          <span onDoubleClick={editStatus}>
            {status || "Hello, that's a default status! Double Click to change"}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
