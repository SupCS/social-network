import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "0" },
        { id: 2, message: "I've never posted here before", likesCount: "23" },
        { id: 3, message: "Blablad", likesCount: "23" },
        { id: 4, message: "Dadayesyestaktak", likesCount: "23" },
      ],
      newPostText: "riochoprano.com",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
