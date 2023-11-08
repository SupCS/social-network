import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer({ profile, getUserProfile, isAuth }) {
  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    getUserProfile(userId);
  }, [userId, getUserProfile]);

  return (
    <div>
      <Profile profile={profile} />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer);
