import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import CartEmpty from "../pages/CartEmpty";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/cart" component={CartEmpty} exact />
    </Switch>
  );
};

export default Router;
