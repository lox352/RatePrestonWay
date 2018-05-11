import React, {Component} from "react";
import {Link} from 'react-router-dom';

import * as routes from '../Constants/Routes.js';

const SignUpPage = () =>
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {}

    render() {
        return (
            <form onSubmit={this.onSubmit}>

            </form>
        );
    }
}



export default SignUpPage;