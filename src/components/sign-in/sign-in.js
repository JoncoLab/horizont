import React, {Component} from 'react';
import './sign-in.css';
import FirebaseService from "../../services/firebase-service";
import Preloader from "../preloader";
import alert from '../../services/alert';

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
            '4) Переписать стили в sign-in.css', 'warning');
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