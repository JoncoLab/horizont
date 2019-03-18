import React, {Component} from 'react';
import './admin.css';
import { FirebaseService, alert } from "../../services";
import Preloader from "../preloader";

export default class Admin extends Component {

    state = {
        preloader: true,
        allUsers: [],
        allMessages: []
    };

    //FN Get All MESSAGES~!~
    getAllMessages = async () => await this._messages.get()
        .then(({docs}) =>
        [ ...docs.map( (doc) =>
            ({id: doc.id, ...doc.data() }) )]
        )
        .catch((reason) => alert(reason));

    fs = new FirebaseService();

    componentDidMount() {
        this.fs.getAllUsers()
            .then((users) => {
                this.setState({
                    allUsers: users
                });
            }, () => {
                alert('Database connection error', 'error');
            })
            .finally(() => {
                this.setState({
                    preloader: false
                });
            })
        
    }

    render() {

        const content = (
            <table className="alt">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Фамілія</th>
                    <th>Побатькові</th>
                    <th>Дата народження</th>
                    <th>Проффеія</th>
                    <th>Особисті якості</th>
                    <th>Телефон</th>
                    <th>Електронна адреса</th>
                    <th>Адреса</th>
                    <th>Наявність документів</th>
                </tr>
                </thead>
                <tbody>
                {this.state.allUsers.map(({id, first_name, last_name, middle_name, birthday, profession, soft_skills, tel, email, address, doc}) => (
                    <tr key={id}>
                        <td><span>{first_name}</span></td>
                        <td><span>{last_name}</span></td>
                        <td><span>{middle_name}</span></td>
                        <td><span>{birthday.toDate().toDateString()}</span></td>
                        <td><span>{profession}</span></td>
                        <td><span>{soft_skills}</span></td>
                        <td><span>{tel}</span></td>
                        <td><span>{email}</span></td>
                        <td><span>{address}</span></td>
                        <td><span>{doc ? "Є в наявності" : "Відсутні"}</span></td>
                    </tr>
                ))}
                </tbody>
            </table>
        );

        const messages = (
            <table className="alt">
                <thead>
                <tr>
                    <th>Ім'я відправника</th>
                    <th>Електронна адресса</th>
                    <th>Повідомлення</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span>"SenderName"</span></td>
                    <td><span>"Email"</span></td>
                    <td><span>"Message"</span></td>
                </tr>
                </tbody>
            </table>
        );

        const display = this.state.preloader ? <Preloader/> : content;
        const display2 = this.state.preloader ? <Preloader/> : messages;

        return (
            <div className="table-wrapper">
                { display }
                { display2 }
            </div>
        );
    }
}