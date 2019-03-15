import React, {Component} from 'react';
import './sign-in.css';
import Preloader from "../preloader";
import { FirebaseService, alert } from "../../services";
import Form from "./form";


import SignedUpScreen from "../sign-up/sign-up";


export default class SignIn extends Component {

    state = {
        preloader: false,
        signedIn: false
    };

    fields = [
        { name: 'tel', label: 'Номер телефону' },
        { name: 'VerificationCode', label: 'Код верифікації' }
    ];

    fs = new FirebaseService();

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ preloader: true });

        const values = [
            ...this.fields.map(({ name }) => (
                {name, value: this.getInput(name) }
            ))
        ];
        this.fs.getAllUsers()
            .then((users) => {
                if (users.find((user) =>
                    values.find((t) =>
                        t.name === "tel").value === user.tel) === true) {
                    //
                    //
                    //
                    //
                    alert('Верифікація успішна');
                } else {
                    window.location.replace('/');
                }
            })
    };

    componentDidMount() {
        alert('Нужно: \r\n ' +
            '2) Вручную написать процедуру логина \r\n' +
            '3) Соответсвенно вручную создать форму логина \r\n' +
            '4) Переписать стили в sign-in.css \r\n' +
            '6) Переписать UsersTable как использующий FB \r\n', 'warning');
    }

    render() {
        // Если verification прошла успешно, то отображается заглушка.
        const content = this.state.signedIn ?
            <SignedUpScreen /> :
            <Form onSubmit={ this.handleSubmit }
                  fields={ this.fields } />;
        const display = this.state.preloader ? <Preloader/> : content;

        return (
            <section className="sign-in-form m-5 mx-auto">
                { display }
            </section>
        );
    }
}
