import React, {Component} from 'react';
import './sign-in.css';
import Preloader from "../preloader";
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

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            preloader: true
        });

        const tel = this.getInput('tel');

        this.fs.getAllUsers()
            .then((users) => {
                if (typeof (users.find((user) => user.tel === tel)) !== 'undefined') {
                    this.fs.signIn(tel, window.recaptchaVerifier)
                        .then((confirmationResult) => {
                            window.confirmationResult = confirmationResult;
                            this.setState({
                                confirmation: true,
                                fields: [{name: 'VerificationCode', label: 'Код верифікації'}]
                            })
                        }, () => {
                            alert('SMS not sent!', 'warning');
                        })
                        .finally(() => {
                            this.setState({
                                preloader: false
                            })
                        });
                } else {
                    alert('Такого користувача ще не зареєстровано!', 'error');
                    this.setState({
                        preloader: false
                    });
                }
            }, () => {
                alert('Не вдалося з\'єднатися з базою данних', 'error');
            });
    };

    handleConfirmation = (event) => {
        event.preventDefault();
        alert(window.confirmationResult);

        const code = this.getInput('VerificationCode');
        alert(code);

        window.cf.confirm(code)
            .then((result) => {
                alert(`Signed in ${result.user}`,'success');
            }, () => {
                alert('Not signed in', 'error');
            })
            .finally(() => alert('Something happened'))
    };

    componentDidMount() {
        this.fs.initializeAuth('submit-sign-in', this.handleSubmit);
    }

    render() {
        // Если verification прошла успешно, то отображается заглушка.
        const content = <Form onSubmit={ this.state.confirmation ? this.handleConfirmation : this.handleSubmit }
                              fields={ this.state.fields }
                              id={ this.state.confirmation ? 'confirm-code' : 'submit-sign-in' } />;
        const display = this.state.preloader ? <Preloader /> : content;

        return (
            <section className="sign-in-form m-5 mx-auto">
                { display }
            </section>
        );
    }
}
