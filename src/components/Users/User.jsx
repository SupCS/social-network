import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow, isAuth }) => {
  const navigate = useNavigate();

  const handleFollow = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      follow(user.id);
    }
  };

  const handleUnfollow = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      unfollow(user.id);
    }
  };
  return (
    <div className={styles.user}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small
                  ? `http://localhost:3001${user.photos.small}`
                  : userPhoto
              }
              className={styles.userPhoto}
              alt="user avatar"
            />
          </NavLink>
        </div>
        <div className={styles.followUnfollowButton}>
          {user.followed ? (
            <button
              className={styles.followUnfollowButton}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={handleUnfollow}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styles.followUnfollowButton}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={handleFollow}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span className={styles.userInfo}>
        <div>
          <h3>{user.name}</h3>
        </div>
        <div>
          <p>{user.status}</p>
        </div>
      </span>
    </div>
  );
};

export default User;
