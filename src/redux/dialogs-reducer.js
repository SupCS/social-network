const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: "Dmytro" },
    { id: 2, name: "Katerina" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Natali" },
    { id: 5, name: "Alex" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Glory to Ukraine" },
    { id: 4, message: "thats awesome" },
    { id: 5, message: "i love react" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body })
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
