import { postsAPI } from "../api/api";
const ADD_POST = "social-network/posts/ADD_POST";
const DELETE_POST = "social-network/posts/DELETE_POST";
const SET_POSTS = "social-network/posts/SET_POSTS";
const TOGGLE_LIKE_SUCCESS = "social-network/posts/TOGGLE_LIKE_SUCCESS";

const initialState = {
  posts: [],
};

// Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.postId),
      };
    case TOGGLE_LIKE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.postId ? { ...post, likes: action.likes } : post
        ),
      };
    default:
      return state;
  }
};

// Action Creators
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (post) => ({ type: ADD_POST, post });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const fetchPosts = (userId) => async (dispatch) => {
  try {
    const posts = await postsAPI.getPosts(userId);
    dispatch(setPosts(posts));
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
  }
};

export const createPost = (newPostText) => async (dispatch) => {
  try {
    const post = await postsAPI.createPost(newPostText);
    dispatch(addPost(post));
  } catch (error) {
    console.error("Ошибка при создании поста:", error);
  }
};

export const removePost = (postId) => async (dispatch) => {
  try {
    await postsAPI.deletePost(postId);
    dispatch(deletePost(postId));
  } catch (error) {
    console.error("Ошибка при удалении поста:", error);
  }
};

export const toggleLike = (postId) => async (dispatch) => {
  try {
    const updatedPost = await postsAPI.toggleLike(postId);
    dispatch({ type: TOGGLE_LIKE_SUCCESS, postId, likes: updatedPost.likes });
  } catch (error) {
    console.error("Ошибка при изменении лайка:", error);
  }
};
export default postReducer;
