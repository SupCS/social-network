// const SEND_MESSAGE = "SEND_MESSAGE";

// let initialState = {
//   dialogs: [
//     { id: 1, name: "Dmytro" },
//     { id: 2, name: "Katerina" },
//     { id: 3, name: "Sergey" },
//     { id: 4, name: "Natali" },
//     { id: 5, name: "Alex" },
//   ],
//   messages: [
//     { id: 1, message: "Hello" },
//     { id: 2, message: "How are you" },
//     { id: 3, message: "Glory to Ukraine" },
//     { id: 4, message: "thats awesome" },
//     { id: 5, message: "i love react" },
//   ],
// };

// export const dialogsReducer = (state = initialState, action) => {
//   // let stateCopy;
//   switch (action.type) {
//     case SEND_MESSAGE:
//       let body = action.newMessageBody;
//       return {
//         ...state,
//         messages: [...state.messages, { id: 6, message: body }],
//       };
//     default:
//       return state;
//   }
// };

// export const sendMessageCreator = (newMessageBody) => ({
//   type: SEND_MESSAGE,
//   newMessageBody,
// });
// export default dialogsReducer;
