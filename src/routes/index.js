import React from "react";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home/Home";
import Signup from "./Signup/Container";
import Main from "../components/Main/Main";
import Profile from "./Profile/Profile";
import Product from "./Product/Container";

function Routes({ isLogin }) {
  return (
    <Switch>
      {isLogin ? <Route exact path="/" component={Main} /> : <Route exact path="/" component={Home} />}
      <Route path="/join" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/product" component={Product} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
