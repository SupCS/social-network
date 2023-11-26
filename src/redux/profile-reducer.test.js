import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "0" },
    { id: 2, message: "I've never posted here before", likesCount: "23" },
    { id: 3, message: "Blablad", likesCount: "23" },
    { id: 4, message: "Dadayesyestaktak", likesCount: "23" },
  ],
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("My test for profile reducer");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it("new post text to match", () => {
  let action = addPostActionCreator("My test for profile reducer");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("My test for profile reducer");
});

it("after deleting length of messages to decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("after deleting length of messages shouldn't decrement if id incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
