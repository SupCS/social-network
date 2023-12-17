import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post
        key={p._id}
        message={p.message}
        likesCount={p.likes ? p.likes.length : 0}
        onDelete={() => props.deletePost(p._id)}
        isOwner={props.isOwner}
        onLike={() => props.toggleLike(p._id)}
        isLikedByCurrentUser={p.likes.includes(props.currentUserId)}
      />
    ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.posts_block}>
      {props.isOwner ? <h3>My posts</h3> : <h3>Posts</h3>}
      {props.isOwner && (
        <div>
          <AddNewPostReduxForm onSubmit={onAddPost} />
        </div>
      )}
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength10]}
          name="newPostText"
          placeholder="Your post text"
          component={Textarea}
        ></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);
