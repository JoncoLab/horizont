import React, {Component} from 'react';
import './sign-in.css';
import {alert, FirebaseService} from "../../services";
import Form from "./form";


export default class SignIn extends Component {

    constructor(props) {

        super(props);

        this._isMounted = false;
    }

    state = {
        preloader: true,
        signedIn: false,
        confirmation: false,
        fields: [ {
            name: 'tel',
            label: 'Номер телефону',
            pattern: '[+]380[0-9]{9}'
        } ]
    };

    fs = new FirebaseService();

    togglePreloader = () => {
        this._isMounted && this.setState(({ preloader }) => (
            {
                preloader: !preloader
            }
        ));
    };

    getInput = name => document.getElementsByName(name)[0].value;

    validateUserRegistration = tel => {
        return this.fs.checkIfUserExistsByTel(tel)
            .then(
                valid => {
                    if (!valid) {
                        this.togglePreloader();
                        throw new Error('Такого користувача не знайдено!');
                    }
                },
                error => {
                    alert(error.message, 'error');
                    this.fs.resetReCaptcha();
                }
            );
    };

    sendSMS = tel => {
        return this.fs.signInUser(tel)
            .catch((reason) => {
                let message = '', type = 'warning';

                switch (reason.code.replace('auth/', '')) {
                    case 'invalid-phone-number':
                        message += 'Некоректний формат номера!';
                        break;
                    case 'missing-phone-number':
                        message += 'Такого мобільного не існує!';
                        break;
                    case 'user-disabled':
                        message += 'Ваш аккаунт було заблоковано!\r\nЗв\'яжіться зі службою підтримки!';
                        type = 'error';
                        break;
                    default:
                        console.log(reason.message);
                        message += 'Виникла невідома помилка!\r\nСпробуйте перезавантажити сторінку.';
                        type = 'error';
                }

                if (type !== 'error') {
                    message += '\r\nСпробуйте ще раз...';
                    this.togglePreloader();
                }

                alert(message, type);

                window.recaptchaVerifier.reset(window.recaptchaWidgetId);

                throw new Error(message);
            });
    };

    handleSubmit = () => {

        const tel = this.getInput('tel');

        if (/[+]380[0-9]{9}/.test(tel)) {

            this.togglePreloader();

            this.validateUserRegistration(tel)
                .then(
                    () => {
                        this.sendSMS(tel)
                            .then(() => {
                                this._isMounted && this.setState({
                                    confirmation: true,
                                    fields: [ {
                                        name: 'confirmation-code',
                                        label: 'Код підтвердження з СМС'
                                    } ]
                                });

                                this.togglePreloader();
                            }, () => {
                                this.togglePreloader();
                            });
                    },
                    reason => {
                        alert(reason.message, 'error');
                    }
                );
        } else {
            alert('Некоректний формат номеру!', 'warning');
            this.fs.resetReCaptcha();
        }
    };

    handleConfirmation = code => {

        const redirect = url => this.props.history.push(url);

        this.fs.confirmSignIn(code)
            .then(() => {
                redirect('user-page');
            });
    };

    componentDidMount() {

        this._isMounted = true;

        const submitButtonId = 'sign-in-submit';

        this._isMounted && this.fs.setUpGoogleReCaptcha(submitButtonId, this.handleSubmit)
            .then(() => {
                this.togglePreloader();
            }, error => {
                this._isMounted && alert('Виникла проблема із сервісом reCAPTCHA! Спробуйте, будь ласка пізніше.', 'warning');
                this._isMounted && console.log(error.message);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { preloader, fields, confirmation } = this.state;

        return (
            <section className="sign-in-form m-5 mx-auto">
                <Form onSubmit={ this.handleSubmit }
                      handleConfirmation={ this.handleConfirmation }
                      confirmation={ confirmation }
                      preloader={ preloader }
                      fields={ fields } />
            </section>
        );
    }
}