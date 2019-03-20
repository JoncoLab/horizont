import React, {Component} from 'react';
import './sign-in.css';
import { FirebaseService, alert } from "../../services";
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

    validateUserRegistration = async tel => {
        return await this.fs.getAllUsers()
            .then((users) => {
                const valid = users.findIndex((user) => user.tel === tel) >= 0;

                if (!valid) {
                    throw new Error('Користувача не знайдено! Зареєструйтеся!');
                }
            });
    };

    sendSMS = (tel) => {
        this.fs.signInUser(tel)
            .then((confirmationResult) => {
                return confirmationResult.verificationId;
            }, (reason) => {
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

    handleConfirmation = verificationId => {
        /**
         * todo: Изменить state -> отрисовать input field для ввода кода с СМС;
         * todo: Получить код, введённый пользователем
         */
    };

    handleSubmit = () => {

        const tel = this.getInput('tel');

        this.togglePreloader();

        this.validateUserRegistration(tel)
            .then((tel) => {
                this.sendSMS(tel)
                    .then((verId) => {
                        this.handleConfirmation(verId);
                    })
            }, (reason) => {
                alert(reason.message, 'error');
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
        return (
            <section className="sign-in-form m-5 mx-auto">
                <Form onSubmit={ this.handleSubmit }
                      preloader={ this.state.preloader }
                      fields={ this.state.fields } />
            </section>
        );
    }
}