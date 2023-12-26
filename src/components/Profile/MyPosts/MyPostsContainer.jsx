import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  createPost,
  removePost,
  toggleLike,
} from "../../../redux/post-reducer";

let mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    currentUserId: state.auth.userId,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(createPost(newPostText));
    },
    deletePost: (postId) => {
      dispatch(removePost(postId));
    },
    toggleLike: (postId) => {
      dispatch(toggleLike(postId));
    },
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ isOwner, currentUserId, ...props }) => (
  <MyPosts
    postPhoto={props.postPhoto}
    isOwner={isOwner}
    currentUserId={currentUserId}
    {...props}
  />
));

export default MyPostsContainer;
