import React, { useState } from "react";
import classes from "./Post.module.css";
import deleteIcon from "../../../../assets/images/delete.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Post = ({
  message,
  likesCount,
  onLike,
  isLikedByCurrentUser,
  isOwner,
  onDelete,
}) => {
  const [liked, setLiked] = useState(isLikedByCurrentUser);

  const handleLikeClick = () => {
    setLiked(!liked);
    onLike();
  };
  return (
    <div className={classes.item}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="avatar"
        ></img>
      </div>
      {message}
      <div className={classes.postButtonsContainer}>
        <span>{likesCount} likes</span>
        <button className={classes.likeButton} onClick={handleLikeClick}>
          <FontAwesomeIcon
            icon={liked ? faHeartSolid : faHeartRegular}
            style={{ color: "red", cursor: "pointer", fontSize: "18px" }}
          />
        </button>
        {isOwner && (
          <button className={classes.deleteButton} onClick={onDelete}>
            <img src={deleteIcon} alt="delete post"></img>
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
