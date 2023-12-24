import React from "react";
import classes from "./../Dialogs.module.css";

const Message = ({ message, senderId, senderName, currentUserId }) => {
  console.log("Current" + currentUserId);
  console.log(`Sender: ${senderId}`);
  console.log("Message component props:", { message, senderId, currentUserId });
  const isCurrentUser = senderId === currentUserId;
  console.log(`Is current in mes: ${isCurrentUser}`);
  const author = isCurrentUser ? "You:" : `${senderName || "Unknown user"}:`;
  // Инлайн-стили для расположения сообщения
  console.log(isCurrentUser);
  const messageStyle = isCurrentUser
    ? { justifyContent: "flex-end", textAlign: "right" }
    : { justifyContent: "flex-start", textAlign: "left" };

  return (
    <div className={classes.messageItem} style={messageStyle}>
      <div className={classes.messageAuthor}>{author}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default Message;
