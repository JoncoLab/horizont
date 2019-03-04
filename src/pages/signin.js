import React from 'react';
import AppHeader from "../components/app-header";
import SignInForm from "../components/sign-in-form";

const SignIn = () => {

    const buttons = [
        { to: '/', label: 'Home', type: 'secondary' },
        { to: '/sign-up', label: 'Sign Up', type: 'primary' }
    ];

    return (
        <div className="sign-in">
            <AppHeader buttons={ buttons }/>
            <main className="main m-5 mx-auto">
                <SignInForm/>
            </main>
        </div>
    );
};

export default SignIn;