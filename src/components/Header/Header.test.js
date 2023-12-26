import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import authReducer from "../../redux/auth-reducer";
import HeaderContainer from "./HeaderContainer"; // Используйте HeaderContainer

const rootReducer = combineReducers({
  auth: authReducer,
  // Другие редьюсеры, если нужно
});

describe("Header Component", () => {
  const renderWithRedux = (component, { initialState } = {}) => {
    const store = createStore(rootReducer, initialState);
    console.log("Текущее состояние хранилища:", store.getState()); // Вывод состояния хранилища

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const rendered = render(
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    );

    console.log("Отрендеренный компонент:", rendered.container.innerHTML); // Вывод отрендеренного компонента
    return rendered;
  };

  test("should render login link if not authenticated", () => {
    renderWithRedux(<HeaderContainer />, {
      initialState: { auth: { isAuth: false, login: null } },
    });
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("should render user info and logout button if authenticated", () => {
    renderWithRedux(<HeaderContainer />, {
      initialState: { auth: { isAuth: true, login: "User123" } },
    });
    expect(screen.getByText("User123")).toBeInTheDocument();
    expect(screen.getByAltText("logout")).toBeInTheDocument();
  });
});
