/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import 'antd/dist/antd.css';

import NavBar from "components/Navbars/DemoNavbar"
import Footer from "components/Footers/Footer"
import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import MyStory from "views/IndexSections/MyStory";
import { DEV_URI, PROD_URI, DEV_ENV, PROD_ENV } from "commons/utils/routes-utils";

export default class Layout extends Component {
  render () {
    const envVar = 'PROD_ENV'
    const env = envVar === 'DEV_ENV' ? DEV_ENV : PROD_ENV
    const uri = envVar === 'DEV_ENV' ? DEV_URI : PROD_URI
    return (
      <BrowserRouter>
        <NavBar uri={env} />
        <Switch>
          <Route path={env} exact render={props => <Index {...props} />} />
          <Route
            path="/landing-page"
            exact
            render={props => <Landing {...props} />}
          />
          <Route path="/login-page" exact render={props => <Login {...props} />} />
          <Route
            path="/profile-page"
            exact
            render={props => <Profile {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={props => <Register {...props} />}
          />
          <Route 
            path={ env + "MyStory"}
            exact
            render={props => <MyStory {...props} />}
          />
          <Redirect to={env} />
        </Switch>
        <Footer uri={env} />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById("root")
);
