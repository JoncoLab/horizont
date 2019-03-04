import React from 'react';
import AppHeader from "../components/app-header";
import SignUpForm from "../components/sign-up-form";

const SignUp = () => {

    const buttons = [
        { to: '/', label: 'Home', type: 'secondary' },
        { to: '/sign-in', label: 'Sign In', type: 'primary' }
    ];

    return (
        <div className="sign-up">
            <AppHeader buttons={ buttons }/>
            <main className="main">
                <SignUpForm/>
            </main>
        </div>
    );
};

export default SignUp;