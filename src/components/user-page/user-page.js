import React, {Component} from 'react';
import './user-page.css';
import * as PropTypes from "prop-types";
import { FirebaseService, alert } from "../../services";
import Preloader from "../preloader";

export default class UserPage extends Component {

    state = {
        preloader: true
    };

    fs = new FirebaseService();

    getCurrentUser = () => {
        return (this.fs._auth.currentUser);
    };

    getUserData = (tel) => {
        this.getCurrentUser();
    };

    static propTypes = {
        first_name: PropTypes.any,
        last_name: PropTypes.any,
        middle_name: PropTypes.any,
        birthday: PropTypes.any,
        profession: PropTypes.any,
        soft_skills: PropTypes.any,
        tel: PropTypes.any,
        email: PropTypes.any,
        address: PropTypes.any
    };

    render() {
        const {first_name, last_name, middle_name, birthday, profession, soft_skills, tel, email, address} = this.props;
        return (
            <main className="container" id="user-page">
                <div className="content">
                    <div className="profile">
                        <div className="details">
                            <div className="tags">
                                {/*Profile!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="tag orange">{profession}</div>
                            </div>
                            {/*User name!!!!!!!!!!!!!!!!!!*/}
                            <div className="title">{first_name}{last_name}{middle_name}</div>

                            <div className="description">
                                {/*Location Address!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-row"><i className="fa fa-map-marker"/><span className="caption">Родом з:</span><span
                                    className="value">{address}</span></div>
                                {/*Registration date!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-row"><i className="fa fa-calendar"/><span className="caption">Зареєстрований на сайті з:</span><span
                                    className="value">{birthday}</span></div>
                            </div>
                        </div>
                        <hr/>

                        <div className="further">
                            <div className="info-row">
                                <div><h3>Контактна інформація</h3></div>
                                {/*main tel number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-block"><i className="fa fa-home"/><span
                                    className="value">{tel}</span>
                                </div>
                            </div>

                            <div className="info-row">
                                {/*email address!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-block"><i className="fa fa-envelope"/><span
                                    className="value">{email || 'email відсутній'}</span></div>
                            </div>
                            <div className="info-row">
                                {/*soft-skills!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-block"><i className="fa fa-envelope"/><span
                                    className="value">{soft_skills}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-buttons">
                        <button className="btn btn-primary" onClick="s">Завантажити документи</button>
                    </div>
                </div>
            </main>
        );
    }
}

