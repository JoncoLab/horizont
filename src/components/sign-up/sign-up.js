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
        { name: 'tel', label: 'Номер мобільного', type: 'tel', title: '+380112222222', pattern: '[+]380[0-9]{9}' },
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


    /**
     * Проверка, существует ли пользователь
     * @param tel
     * @returns {Promise<any>}
     */
    validateUserRegistration = tel => {
        return this.fs.checkIfUserExistsByTel(tel)
            .then(
                exists => {
                    if (exists) {
                        throw new Error('Користувача з таким номером телефону вже зареєстровано!');
                    }
                },
                error => { alert(error.message, 'error') }
            );
    };

    /**
     * Создание списка имён-значений полученных из формы
     * @returns {{name, value: *}[]}
     */
    gatherData = () => {
        const values = [
            ...this.fields.map(({ name }) => (
                { name, value: this.getInput(name) }
            ))
        ];
        values.push({ name: 'doc', value: this.getInput('doc') });

        return values;
    };

    /**
     * Обработчик события отправки формы
     * @param event
     */
    handleSubmit = event => {
        event.preventDefault();

        const tel = this.getInput('tel');
        const values = this.gatherData();
        this.togglePreloader();

        this.validateUserRegistration(tel)
            .then(
                () => {
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
                                alert('Успішна реєстрація!', 'success');
                            },
                            error => {
                                alert('Помилка бази даних', 'error');
                                console.log(error.message);
                            }
                        )
                        .finally(() => { this.togglePreloader() });
                },
                error => {
                    alert(error.message,'warning');
                    this.togglePreloader();
                }
            );
    };

    componentDidMount() {
        this.togglePreloader();
    }

    render() {

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