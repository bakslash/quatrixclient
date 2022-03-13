import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom";

import { Provider } from 'react-redux'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import './assets/styles/index.css'

import store from './store'

import Auth from "layouts/Auth.js";
import Admin from "layouts/Admin.js";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/personnel/login" exact component={Auth} />
      <Route path="/admin" component={Admin} />
      
      <Redirect from="/" to="/personnel/login" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
