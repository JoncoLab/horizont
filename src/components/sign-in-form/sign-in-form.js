import React, {Component} from 'react';
import './sign-in-form.css';
import FirebaseService from "../../services/firebase-service";
import Preloader from "../preloader";
import {ToastsStore} from "react-toasts";

export default class SignInForm extends Component {

    fs = new FirebaseService();

    state = {
        preloader: true
    };

    togglePreloader = () => this.setState(({preloader}) => ({ preloader: !preloader }));

    signInSuccessWithAuthResult = ({ user }) => {
        ToastsStore.success('Sign In successful!');
        ToastsStore.info(`User unique id: ${user.uid}`);
        return false;
    };

    componentDidMount() {

        this.fs.startFirebaseUI(
            'firebase-sign-in',
            this.signInSuccessWithAuthResult,
            this.togglePreloader,
            'https://google.com',
            'http://horizontjobs.com')
    }

    render() {

        const { preloader } = this.state;

        return (
            <section className="sign-in-form m-5 mx-auto">
                { preloader ? <Preloader/> : null }
                <div id="firebase-sign-in"/>
            </section>
        );
    }
}