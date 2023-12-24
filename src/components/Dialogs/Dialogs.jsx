import React, { useEffect, useRef } from "react";
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
  const messagesEndRef = useRef(null);
  const { userId } = useParams(); // Получаем userId из URL
  const dispatch = useDispatch();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Скролл при монтировании компонента
  }, [messagesPage.messages]);

  useEffect(() => {
    getDialogs();
    if (userId) {
      getMessages(userId);
    }
  }, [getDialogs, getMessages, userId]);

  useEffect(() => {
    socket.on("receive-message", (newMessage) => {
      if (newMessage.senderId === userId || newMessage.receiverId === userId) {
        if (newMessage.senderId !== currentUserId) {
          dispatch(
            sendMessageCreator({
              ...newMessage,
              senderName: newMessage.senderName,
            })
          );
        }
      } else if (newMessage.senderId !== currentUserId) {
        getDialogs();
      }
    });

    return () => {
      socket.off("receive-message");
    };
  }, [dispatch, getDialogs, currentUserId, userId]);

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
  let messagesElements = messagesPage.messages.map((m) => {
    return (
      <Message
        message={m.text}
        key={m._id}
        senderId={m.senderId}
        senderName={m.senderName}
        currentUserId={currentUserId}
      />
    );
  });

  if (!isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {userId ? messagesElements : null}
        <div ref={messagesEndRef}></div>
      </div>
      <div className={classes.messageInput}>
        {userId && <AddMessageForm onSubmit={addNewMessage} />}
      </div>
    </div>
  );
};

export default Dialogs;
