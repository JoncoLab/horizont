import React, {Component} from 'react';
import './sign-in-form.css';
import FirebaseService from "../../services/firebase-service";
import Alert from "../alert";
import Preloader from "../preloader";

export default class SignInForm extends Component {

    fs = new FirebaseService();

    state = {
        alert: false,
        preloader: true
    };

    sISuccWithRes = (alert = false) => {
        this.setState({
            alert
        });
    };

    componentDidMount() {
        this.fs.startFirebaseUI('firebase-sign-in', this.sISuccWithRes, )
    }

    render() {
        const { type, message } = this.state.alert;
        const alert = message ? <Alert type={type} message={message}/> : null;
        const preloader = this.state.preloader ? <Preloader/> : <fieldset id="firebase-sign-in"/>;
        return (
            <section className="sign-in-form m-5 mx-auto">
                <form className="card border-primary p-5">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="phone">Email address</label>
                            <input
                                type="tel"
                                className="form-control-lg"
                                id="phone"
                                name="phone"
                                aria-describedby="phone-help"
                                placeholder="Enter your phone"/>
                            <small id="phone-help"
                                   className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                    </fieldset>
                    <fieldset className="btn-group">
                        <button type="submit" className="btn btn-primary ml-auto btn-lg">Login</button>
                    </fieldset>
                    {preloader}
                </form>
                {alert}
            </section>
        );
    }
}