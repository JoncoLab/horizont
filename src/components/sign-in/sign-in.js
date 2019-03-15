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
            '2) Вручную написать процедуру логина \r\n' +
            '3) Соответсвенно вручную создать форму логина \r\n' +
            '4) Переписать стили в sign-in.css \r\n' +
            '6) Переписать UsersTable как использующий FB \r\n', 'warning');
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