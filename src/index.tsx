import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Router } from "react-router-dom";
import { history } from "./app/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);