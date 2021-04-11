import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { loadFromLocalStorageAsync } from "./redux/actions/cart";
import { Router } from "react-router-dom";
import { history } from "./app/history";

store.dispatch(loadFromLocalStorageAsync);

store.subscribe(() => {
  console.log("попали в сабскрайб");
  const cart = store.getState().cart.productsInCart;
  window.localStorage.setItem("cart2", JSON.stringify(cart));
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
