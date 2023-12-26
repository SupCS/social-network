import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RegisterForm from "./RegisterForm";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";

describe("RegisterForm", () => {
  const renderWithReduxForm = (
    component,
    {
      initialState,
      store = configureStore({
        reducer: combineReducers({ form: formReducer }),
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

  test("should render registration form", () => {
    renderWithReduxForm(<RegisterForm />);

    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Register/i })
    ).toBeInTheDocument();
  });

  test("should display error message if name is too long", () => {
    renderWithReduxForm(<RegisterForm />);

    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "a".repeat(19) } });
    fireEvent.blur(nameInput);

    expect(screen.getByText("Max length is 18 symbols")).toBeInTheDocument();
  });
  test("should display error message if password is too short", () => {
    renderWithReduxForm(<RegisterForm />);

    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "pass" } });
    fireEvent.blur(passwordInput);

    expect(screen.getByText("Min length is 6 symbols")).toBeInTheDocument();
  });
});
