import React from "react";
import classes from "./../Dialogs.module.css";

const Message = ({ message, senderId, senderName, currentUserId }) => {
  console.log("Current" + currentUserId);
  console.log("Sender" + senderId);
  console.log("Message component props:", { message, senderId, currentUserId });
  const isCurrentUser = senderId === currentUserId;
  const author = isCurrentUser ? "You:" : `${senderName || "Unknown user"}:`;

  return (
    <div className={classes.messageItem}>
      <div className={classes.messageAuthor}>{author}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default Message;
