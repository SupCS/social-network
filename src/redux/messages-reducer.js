// src/redux/messages-reducer.js
const SEND_MESSAGE = "SEND_MESSAGE";
const SET_MESSAGES = "SET_MESSAGES";
const GET_DIALOGS = "GET_DIALOGS";

let initialState = {
  dialogs: [], // список диалогов
  messages: [], // список сообщений
};

const messagesReducer = (state = initialState, action) => {
  console.log("Reducer action:", action);
  switch (action.type) {
    case SET_MESSAGES:
      console.log("Setting messages:", action.messages);
      return { ...state, messages: action.messages };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };

    case GET_DIALOGS:
      return { ...state, dialogs: action.dialogs };
    default:
      return state;
  }
};

export const setMessages = (messages) => ({ type: SET_MESSAGES, messages });
export const sendMessageCreator = (message) => {
  return {
    type: SEND_MESSAGE,
    message,
  };
};

export const getDialogs = (dialogs) => ({ type: GET_DIALOGS, dialogs });

export default messagesReducer;
