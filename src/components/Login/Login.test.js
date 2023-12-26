import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import authReducer from "../../redux/auth-reducer";

const initialState = {
  auth: {
    captchaUrl: null,
    isAuth: false,
  },
};

describe("Login Component", () => {
  const renderWithRedux = (
    component,
    {
      store = configureStore({
        reducer: combineReducers({
          form: formReducer,
          auth: authReducer,
        }),
        preloadedState: initialState,
      }),
    } = {}
  ) => {
    return {
      ...render(
        <Provider store={store}>
          <BrowserRouter>{component}</BrowserRouter>
        </Provider>
      ),
      store,
    };
  };

  test("should render login form", () => {
    renderWithRedux(<Login />);

    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("should display required error message if email is empty", () => {
    renderWithRedux(<Login />);

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.blur(emailInput);

    expect(screen.getByText("Field is required")).toBeInTheDocument();
  });

  test("should display required error message if password is empty", () => {
    renderWithRedux(<Login />);

    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.blur(passwordInput);

    expect(screen.getByText("Field is required")).toBeInTheDocument();
  });

  // Дополнительные тесты валидации и отправки формы можно добавить здесь
});
