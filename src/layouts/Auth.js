import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "views/auth/login.js";

export default function Auth() {
  return (
    <>
          <Switch>
            <Route path="/personnel/login" exact component={Login} />
            <Redirect from="/" to="/personnel/login" />
          </Switch>
    </>
  );
}
