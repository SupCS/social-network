import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { render, waitFor } from "@testing-library/react";
import DialogsContainer from "./DialogsContainer";

const mockStore = configureStore([]);
const store = mockStore({
  messagesPage: {
    dialogs: [],
    messages: [],
  },
  auth: {
    userId: "123",
  },
});

describe("DialogsContainer", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <Router>
          <DialogsContainer />
        </Router>
      </Provider>
    );
  });
});
