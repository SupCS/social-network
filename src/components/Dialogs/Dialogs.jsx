import React, { useEffect } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm.jsx";
import { Navigate, useParams } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = ({
  getDialogs,
  getMessages,
  sendMessage,
  messagesPage,
  isAuth,
  currentUserId,
}) => {
  const { userId } = useParams(); // Получаем userId из URL

  useEffect(() => {
    console.log("Fetching dialogs");
    getDialogs();
  }, [getDialogs]);

  useEffect(() => {
    if (userId) {
      console.log("Fetching messages for userId:", userId);
      getMessages(userId);
    }
  }, [userId, getMessages]);
  let dialogsElements = messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = messagesPage.messages.map((m) => (
    <Message
      message={m.text}
      key={m._id}
      senderId={m.senderId}
      currentUserId={currentUserId} // Используем currentUserId из props
    />
  ));

  if (!isAuth) return <Navigate to={"/login"} />;

  const addNewMessage = (values) => {
    sendMessage(userId, values.newMessageBody); // Передаем userId при отправке сообщения
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
