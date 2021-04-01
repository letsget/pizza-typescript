import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import { Router } from "react-router-dom";
import { history } from "./app/history";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
