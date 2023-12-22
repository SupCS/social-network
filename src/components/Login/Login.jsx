import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate, Link } from "react-router-dom";
import styles from "./../common/FormControls/FormControls.module.css";
import PurpleButton from "../common/Buttons/PurpleButton";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        {
          type: "checkbox",
        },
        "remember me"
      )}
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input)}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <PurpleButton text="Login"></PurpleButton>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) return <Navigate to={"/profile"}></Navigate>;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      <div className={styles.registerLink}>
        <Link to="/register">Register Now</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
