import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import CartEmpty from "../pages/CartEmpty";
import CartOrder from "../pages/CartOrder";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/cart" component={CartOrder} exact />
    </Switch>
  );
};

export default Router;
