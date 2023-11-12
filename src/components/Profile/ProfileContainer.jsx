import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
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
}) {
  let { userId } = useParams();
  if (!userId) {
    userId = 30018;
  }

  useEffect(() => {
    getUserProfile(userId);
    getStatus(userId);
  }, [userId, getUserProfile, getStatus]);

  return (
    <div>
      <Profile profile={profile} status={status} updateStatus={updateStatus} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
