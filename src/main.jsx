import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import App from "./App"; // Ensure the correct path to App component

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);