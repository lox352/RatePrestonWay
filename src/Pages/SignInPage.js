import React from "react";

import SignInForm from "../Components/SignIn/SignInForm.js"
import SignUpLink from "../Components/SignIn/SignUpLink.js"

const SignInPage = () =>
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpLink />
    </div>

export default SignInPage;