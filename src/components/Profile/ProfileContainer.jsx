import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";

function ProfileContainer({ profile, getUserProfile, isAuth }) {
  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    getUserProfile(userId);
  }, [userId, getUserProfile]);

  if (!isAuth) return <Navigate to={"/login"}></Navigate>;
  return (
    <div>
      <Profile profile={profile} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
