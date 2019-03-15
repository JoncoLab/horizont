import React, {Component} from 'react';
import Preloader from "../preloader";
import { FirebaseService, alert } from "../../services";

export default class FooterForm extends Component {

    state = {
        preloader: false
    };

    fs = new FirebaseService();

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ preloader: true });

        const newMessage = {
            senderName: this.setState('name'),
            senderEmail: this.getInput('email'),
            message: this.getInput('message')
        };

        this.fs.addMessage(newMessage)
            .then(() => {
                alert('Ваше повідомлення надіслано!', 'success');
            }, () => {
                alert('Помилка з\'єднання з базою даних');
            })
            .finally(() => {
                this.setState({ preloader: false });
            });
    };


    render() {
        const form = (
            <div className="row">
                <form method="post" className="col-md" id="table" onSubmit={ this.handleSubmit }>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">ІМ'Я</label>
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="nameField"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailField"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Textarea">ВАШЕ ПОВІДОМЛЕННЯ</label>
                            <textarea className="form-control" id="Textarea" name="message" rows="3" defaultValue=""/>
                        </div>

                        <button type="submit" className="btn btn-primary">НАДІСЛАТИ</button>
                    </fieldset>
                </form>
            </div>
        );
        const display = this.state.preloader ? <Preloader/> : form;

        return (
            <footer className="container">
                { display }
                <ul className="col-md" id="footerUl">
                    <li className="fa-home">
                        Horizont Jobs<br/>
                        88018, вул. Вулична, №2894<br/>
                        м. Ужгород, Україна
                    </li>
                    <li className="fa-phone">+380 (00) 111 1111</li>
                    <li className="fa-phone">+420 (00) 222 2222</li>
                    <li className="fa-envelope"><a href="/">information@horizontjobs.com</a></li>
                    <li className="fa-facebook"><a href="/">facebook.com/horizont-jobs</a></li>
                    <li className="fa-paper-plane"><a href="/">@horizontjobs</a></li>
                </ul>
            </footer>
        );
    }
}