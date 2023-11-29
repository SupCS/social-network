import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  clearProfile,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer({
  profile,
  getUserProfile,
  isAuth,
  getStatus,
  status,
  updateStatus,
  authorizedUserId,
  clearProfile,
}) {
  let { userId } = useParams();
  if (!userId) {
    userId = authorizedUserId;
  }

  useEffect(() => {
    getUserProfile(userId);
    getStatus(userId);
    return () => {
      clearProfile();
    };
  }, [userId, getUserProfile, getStatus, clearProfile]);

  return (
    <div>
      <Profile profile={profile} status={status} updateStatus={updateStatus} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    clearProfile,
  }),
  withAuthRedirect
)(ProfileContainer);
