import React, { useEffect } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm.jsx";
import { Navigate, useParams } from "react-router-dom";
import classes from "./Dialogs.module.css";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { sendMessageCreator } from "../../redux/messages-reducer";

const socket = io("http://localhost:3001"); // Подключение к серверу Socket.io

const Dialogs = ({
  getDialogs,
  getMessages,
  sendMessage,
  messagesPage,
  isAuth,
  currentUserId,
}) => {
  const { userId } = useParams(); // Получаем userId из URL
  const dispatch = useDispatch();

  useEffect(() => {
    getDialogs();
    if (userId) {
      getMessages(userId);
    }
  }, [getDialogs, getMessages, userId]);

  useEffect(() => {
    socket.on("receive-message", (newMessage) => {
      if (newMessage.senderId !== currentUserId) {
        dispatch(sendMessageCreator(newMessage));
      }
    });

    return () => {
      socket.off("receive-message");
    };
  }, [dispatch, currentUserId]);

  const addNewMessage = (values) => {
    const messageData = {
      senderId: currentUserId,
      receiverId: userId,
      text: values.newMessageBody,
    };
    sendMessage(userId, values.newMessageBody); // API запрос на отправку сообщения
    socket.emit("new-message", messageData); // Отправка сообщения через сокет
  };

  let dialogsElements = messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = messagesPage.messages.map((m) => (
    <Message
      message={m.text}
      key={m._id}
      senderId={m.senderId}
      currentUserId={currentUserId}
    />
  ));

  if (!isAuth) return <Navigate to={"/login"} />;

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
