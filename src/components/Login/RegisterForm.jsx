import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControls/FormControls";
import {
  required,
  minLengthCreator,
  maxLengthCreator,
} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { register } from "../../redux/auth-reducer";
import styles from "./../common/FormControls/FormControls.module.css";
import { useNavigate } from "react-router-dom";
import PurpleButton from "../common/Buttons/PurpleButton";

const minLength6 = minLengthCreator(6);
const maxLength18 = maxLengthCreator(18);

const RegisterForm = ({ handleSubmit, error }) => {
  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        {createField("Name", "name", [required, maxLength18], Input)}
        {createField("Email", "email", [required], Input, { type: "email" })}
        {createField("Login", "login", [required, maxLength18], Input)}
        {createField("Password", "password", [required, minLength6], Input, {
          type: "password",
        })}
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <div>
          <PurpleButton text="Register"></PurpleButton>
        </div>
      </form>
    </>
  );
};

const RegisterReduxForm = reduxForm({
  form: "register",
})(RegisterForm);

const Register = (props) => {
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    props
      .register(
        formData.name,
        formData.email,
        formData.login,
        formData.password
      )
      .then(() => {
        navigate("/login");
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };

  return <RegisterReduxForm onSubmit={onSubmit} />;
};

export default connect(null, { register })(Register);
