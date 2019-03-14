import React, {Component} from 'react';
import './sign-in.css';
import { FirebaseService, alert } from "../../services";
import Preloader from "../preloader";

export default class SignIn extends Component {

    fs = new FirebaseService();

    state = {
        preloader: true
    };

    componentDidMount() {
        alert('Нужно: \r\n ' +
            '1) Перенести стили Field в отдельно созданный файл \r\n ' +
            '2) Вручную написать процедуру логина \r\n' +
            '3) Соответсвенно вручную создать форму логина \r\n' +
            '4) Переписать стили в sign-in.css \r\n' +
            '5) ПРИМЕНИТЬ !!!HOC!!! ДЛЯ КОМПОНЕНТОВ КОТОРЫЕ ЮЗАЮТ !!!FIREBASE!!! \r\n' +
            '6) Переписать UsersTable как использующий FB \r\n' +
            '7) Переписать структуру Footer\'a', 'warning');
    }

    render() {

        const display = this.state.preloader ? <Preloader/> : null;

        return (
            <section className="sign-in-form m-5 mx-auto">
                { display }
            </section>
        );
    }
}