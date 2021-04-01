import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import { useSelector } from "react-redux";
import CartEmpty from "../pages/CartEmpty";
import CartOrder from "../pages/CartOrder";

const Router = () => {
  const cart = useSelector(({ cart }: any) => cart.productsInCart);

  return (
    <Switch>
      <Route path="/pizza-typescript" component={Main} exact />
      {cart.length ? (
        <Route path="/cart" component={CartOrder} exact />
      ) : (
        <Route path="/cart" component={CartEmpty} exact />
      )}
    </Switch>
  );
};

export default Router;
