import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../Constants/Routes.js';

const SignUpLink = () =>
  <p>
    {"Don't have an account? "}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default SignUpLink;