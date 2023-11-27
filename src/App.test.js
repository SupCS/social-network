import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  // Use createRoot to manage the root
  const root = createRoot(div);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
  // Clean up
  root.unmount();
});
