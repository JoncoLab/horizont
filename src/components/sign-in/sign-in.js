import React, {Component} from 'react';
import './sign-in.css';
import {alert, FirebaseService} from "../../services";
import Form from "./form";


export default class SignIn extends Component {

    state = {
        preloader: true,
        signedIn: false,
        confirmation: false,
        fields: [ { name: 'tel', label: 'Номер телефону' } ]
    };

    fs = new FirebaseService();

    togglePreloader = () => {
        this.setState(({ preloader }) => (
            {
                preloader: !preloader
            }
        ));
    };

    getInput = name => document.getElementsByName(name)[0].value;

    validateUserRegistration = tel => {
        return this.fs.getAllUsers()
            .then((users) => {
                const valid = users.findIndex((user) => user.tel === tel) >= 0;

                if (!valid) {
                    throw new Error('Користувача не знайдено! Зареєструйтеся!');
                } else {
                    return tel;
                }
            });
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
                        console.log(reason);
                        message += 'Виникла невідома помилка!\r\nСпробуйте перезавантажити сторінку.';
                        type = 'error';
                }

                if (type !== 'error') {
                    message += '\r\nСпробуйте ще раз...';
                    this.togglePreloader();
                }

                alert(message, type);

                window.recaptchaVerifier.reset(window.recaptchaWidgetId);
            });
    };

    handleSubmit = () => {

        const tel = this.getInput('tel');

        this.togglePreloader();

        this.validateUserRegistration(tel)
            .then((tel) => {
                this.sendSMS(tel)
                    .then(() => {
                        /**
                         * todo: Изменить state -> отрисовать input field для ввода кода с СМС;
                         * todo: Получить код, введённый пользователем
                         */
                        this.setState({
                            confirmation: true,
                            fields: [ {
                                name: 'confirmation-code',
                                label: 'Код підтвердження з СМС'
                            } ]
                        });

                        this.togglePreloader();
                    })
            }, (reason) => {
                alert(reason.message, 'error');
            });
    };

    handleConfirmation = (code) => {
        this.fs.confirmSignIn(code)
            .then((userCredential) => {
                console.log(userCredential);
            });
    };

    componentDidMount() {

        const submitButtonId = 'sign-in-submit';

        this.fs.setUpGoogleReCaptcha(submitButtonId, this.handleSubmit)
            .then(() => {
                this.togglePreloader();
            });
    }

    render() {
        // Если verification прошла успешно, то отображается заглушка.
        // fix: Проверить как и что оно рендерить, в зависимости от каких state, и пофиксить.
        //  Я уже слишком хочу спать, чтобы делать это сегодня

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