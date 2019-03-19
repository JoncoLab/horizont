import React, {Component} from 'react';
import './sign-in.css';
import { FirebaseService, alert } from "../../services";
import Form from "./form";


export default class SignIn extends Component {

    state = {
        preloader: false,
        signedIn: false,
        confirmation: false,
        fields: [ { name: 'tel', label: 'Номер телефону' } ]
    };

    fs = new FirebaseService();
    fb = this.fs.getInstance();

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({
            preloader: true
        });

        const submitButtonId = 'sign-in-submit';

        this.fb.auth().useDeviceLanguage();

        window.recaptchaVerifier = () => new this.fb.auth.RecaptchaVerifier(submitButtonId, {
            'size': 'invisible',
            'callback': () => {
                this.setState({
                    confirmation: true,
                    fields: [ { name: 'conf-code', label: 'Код підтвердження з SMS' } ],
                    preloader: false
                });
            }
        });

        const tel = this.getInput('tel');

        await this.fb.auth().signInWithPhoneNumber(tel, window.recaptchaVerifier())
            .then((confirmation) => {

                window.confirmationResult = confirmation;

                alert('Fulfilled', 'success');
            }, ({ message }) => {
                alert(message, 'error');
            });

        this.handleConfirmation(prompt('Lol', ''));
    };

    handleConfirmation = (code) => {
        alert(code, 'success');
    };

    render() {
        // Если verification прошла успешно, то отображается заглушка.

        return (
            <section className="sign-in-form m-5 mx-auto">
                <Form onSubmit={ this.handleSubmit }
                      preloader={ this.state.preloader }
                      fields={ this.state.fields } />
            </section>
        );
    }
}
