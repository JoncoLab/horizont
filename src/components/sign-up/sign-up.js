import React, { Component } from 'react';
import './sign-up.css';
import Preloader from "../preloader";
import { FirebaseService, alert } from "../../services";
import SignedUpScreen from './sign-up-screen';
import Form from "./form";

class SignUp extends Component {

    state = {
        preloader: true,
        signedUp: false
    };

    fields = [
        { name: 'first_name', label: 'Ім\'я' },
        { name: 'last_name', label: 'Прізвище' },
        { name: 'middle_name', label: 'По-батькові' },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'tel', label: 'Номер мобільного', type: 'tel', title: '+380112222222' },
        { name: 'profession', label: 'Ваша професія' },
        { name: 'address', label: 'Ваша адреса' },
        { name: 'birthday', label: 'Дата народження', type: 'date' },
        { name: 'soft_skills', label: 'Перерахуйте свої корисні навички та вміння через кому' }
    ];

    fs = new FirebaseService();

    togglePreloader = () => {
        this.setState(({ preloader }) => ({ preloader: !preloader }));
    };

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = event => {
        event.preventDefault();
        this.togglePreloader();

        const tel = this.getInput('tel');
        /**
         * Проверка, существует ли пользователь
         * @type {boolean}
         */
        const valid = !this.fs.checkIfUserExistsByTel(tel);

        if (valid) {

            /**
             * Создание списка имён-значений полученных из формы
             * @type {{name, value: *}[]}
             */
            const values = [
                ...this.fields.map(({ name }) => (
                    { name, value: this.getInput(name) }
                ))
            ];
            values.push({ name: 'doc', value: this.getInput('doc') });

            /**
             * Присвоение имён-значений объекту newUser
             * @type {{name?: any}}
             */
            let newUser = {};
            values.forEach((value) => {
                newUser = {
                    ...newUser,
                    [value.name]: value.value
                };
            });

            /**
             * Добавление нового пользователя в базу даных
             */
            this.fs.addUser(newUser)
                .then(
                    () => {
                        this.setState({
                            signedUp: true
                        });
                        alert('Успішна реєстрація!');
                    },
                    error => {
                        alert('Помилка бази даних', 'error');
                        console.log(error.message);
                    }
                )
                .finally(() => { this.togglePreloader() });
        } else {
            alert('Користувача з таким номером телефону вже зареєстровано!','warning');
        }
    };

    componentDidMount() {
        this.togglePreloader();
    }

    render() {
        // Если регистрация прошла успешно, то отображается заглушка.
        const content = this.state.signedUp ?
            <SignedUpScreen /> :
            <Form onSubmit={ this.handleSubmit }
                  fields={ this.fields } />;
        const display = this.state.preloader ? <Preloader/> : content;

        return (
            <section className="signed-up-form m-5">
                { display }
            </section>
        )
    }
}

export default SignUp;