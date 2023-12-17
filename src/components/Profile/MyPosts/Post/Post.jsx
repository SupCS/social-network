import React from "react";
import classes from "./Post.module.css";

const Post = ({
  message,
  likesCount,
  onLike,
  isLikedByCurrentUser,
  isOwner,
  onDelete,
}) => {
  return (
    <div className={classes.item}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        alt="avatar"  
      ></img>
      {message}
      <div>
        <span>{likesCount} likes</span>
        <button onClick={onLike}>
          {isLikedByCurrentUser ? "Unlike" : "Like"}
        </button>
      </div>
      {isOwner && <button onClick={onDelete}>Delete</button>}
    </div>
  );
};

export default Post;
