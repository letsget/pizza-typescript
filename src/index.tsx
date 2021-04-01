import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Router } from "react-router-dom";
import { history } from "./app/history";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
