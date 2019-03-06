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

    alert = ({ message, type = 'primary' }) => this.setState({ alert: { type, message } });

    removeAlert = () => this.setState({ alert: false });

    togglePreloader = () => this.setState(({preloader}) => ({ preloader: !preloader }));

    signInSuccessWithAuthResult = ({ user }) => {

        this.alert(`Signed in successfuly! \r\n User identificator: "${ user.uid }"`);
        return false;
    };

    componentDidMount() {

        this.fs.startFirebaseUI(
            'firebase-sign-in',
            this.signInSuccessWithAuthResult,
            this.togglePreloader,
            'https://google.com',
            'http://horizontjobs.com')
    }

    render() {

        const { alert, preloader } = this.state;

        return (
            <section className="sign-in-form m-5 mx-auto">
                {alert ? <Alert onUnmount={ this.removeAlert } { ...alert }/> : null}
                {preloader ? <Preloader/> : null}
                <div id="firebase-sign-in"/>
            </section>
        );
    }
}