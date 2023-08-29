const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
    // {type: 'ADD-POST'}
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text});

window.store = store;
export default store;
