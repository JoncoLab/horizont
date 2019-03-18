import React, {Component} from 'react';
import './user-page.css';

export default class UserPage extends Component {
    render() {
        return (
            <main className="container" id="user-page">
                <div className="content">
                    <div className="profile">
                        <div className="details">
                            <div className="tags">
                                {/*Profile!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="tag orange">Електрик 3-го розряду</div>
                            </div>
                            {/*User name!!!!!!!!!!!!!!!!!!*/}
                            <div className="title">name</div>

                            <div className="description">
                                {/*Location Address!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-row"><i className="fa fa-map-marker"/><span className="caption">Родом з:</span><span
                                    className="value">Хуст, Україна</span></div>
                                {/*Registration date!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-row"><i className="fa fa-calendar"/><span className="caption">Зареєстрований на сайті з:</span><span
                                    className="value">17 червня 2018</span></div>
                            </div>
                        </div>
                        <hr/>

                        <div className="further">
                            <div className="info-row">
                                <div><h3>Контактна інформація</h3></div>
                                {/*main tel number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-block"><i className="fa fa-home"/><span className="value">+2 574 986 224</span>
                                </div>
                                {/*Personal Site if exist*/}
                                <div className="info-block"><i className="fa fa-globe"/><span
                                    className="value">https://codepen.io</span></div>
                            </div>

                            {/*secondary tel number if exist*/}
                            <div className="info-row">
                                <div className="info-block"><i className="fa fa-phone"/><span className="value">+6 865 664 25 69</span>
                                </div>

                                {/*email address!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                                <div className="info-block"><i className="fa fa-envelope"/><span
                                    className="value">mark.brack@gmail.com</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-buttons">
                        <button className="btn btn-primary">Завантажити документи</button>
                    </div>
                </div>
            </main>
        );
    }
}