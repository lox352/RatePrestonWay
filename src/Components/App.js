import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import withAuthentication from './WithAuthentication.js';

import Navigation from './Navigation/Navigation.js';
import LandingPage from '../Pages/LandingPage.js';
import SignUpPage from '../Pages/SignUpPage.js';
import SignInPage from '../Pages/SignInPage.js';
import PasswordForgetPage from '../Pages/PasswordForgottenPage.js';
import HomePage from '../Pages/HomePage.js';
import AccountPage from '../Pages/AccountPage.js';

import * as routes from '../Constants/Routes'


const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgottenPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);