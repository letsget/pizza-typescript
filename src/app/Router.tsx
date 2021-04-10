import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import { useSelector } from "react-redux";
import CartEmpty from "../pages/CartEmpty";
import CartOrder from "../pages/CartOrder";

const Router = () => {
  const cart = useSelector(({ cart }: any) => cart.productsInCart);
  const storedCart = window.localStorage.getItem("cart");

  return (
    <Switch>
      <Route path="/" component={Main} exact />
      {cart.length || storedCart ? (
        <Route path="/cart" component={CartOrder} exact />
      ) : (
        <Route path="/cart" component={CartEmpty} exact />
      )}
    </Switch>
  );
};

export default Router;
