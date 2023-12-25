import React from "react";
import {
  Input,
  Textarea,
  createField,
} from "../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css";
import style from "../../common/FormControls/FormControls.module.css";
import { maxLengthCreator } from "../../../utils/validators/validators";

const maxLength25 = maxLengthCreator(25);
const maxLength50 = maxLengthCreator(50);

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  const goToEditMode = () => {
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full Name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b>{" "}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [maxLength50],
          Textarea
        )}
      </div>
      <div>
        <b>Сontacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contact}>
              <b>{key}:</b>{" "}
              {createField(key, "contacts." + key, [maxLength25], Input)}
            </div>
          );
        })}
      </div>
      {/* {isOwner && ( */}
      <div>
        <button onClick={goToEditMode}>Save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
  enableReinitialize: true,
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
