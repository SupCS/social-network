import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";
const REGISTER_SUCCESS = "samurai-network/auth/REGISTER_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null - captcha not required
  registerSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    default:
      return state;
  }
};

export const registerSuccess = () => ({ type: REGISTER_SUCCESS });
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login =
  (email, password, rememberMe = false, captcha) =>
  async (dispatch) => {
    try {
      let response = await authAPI.login(email, password, rememberMe, captcha);
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    } catch (error) {
      let message = "Failed to log in";
      if (error.response && error.response.status === 401) {
        message = "Wrong email or password";
      }
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};
export const register = (name, email, login, password) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await authAPI.register(name, email, login, password);
      if (response.data.resultCode === 0) {
        dispatch(registerSuccess());
        resolve(); // Успешное выполнение
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("register", { _error: message }));
        reject(); // Ошибка
      }
    } catch (error) {
      let message =
        error.response &&
        error.response.data &&
        error.response.data.messages &&
        error.response.data.messages.length > 0
          ? error.response.data.messages[0]
          : "Registration failed";
      dispatch(stopSubmit("register", { _error: message }));
      reject(message);
    }
  });
};
export default authReducer;
