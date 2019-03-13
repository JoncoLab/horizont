import React, {Component} from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import WelcomeScreen from "../welcome-screen";
import SignUpForm from "../sign-up-form";
import SignInForm from "../sign-in-form";
import alert from '../../services/alert';

import { ToastsContainer, ToastsStore } from 'react-toasts';
import FirebaseService from "../../services/firebase-service";
import UsersTable from "../users-table";

export default class App extends Component {

    state = {
        allUsers: []
    };

    nav = {
        si: { to: '/sign-in', label: 'Sign In' },
        su: { to: '/sign-up', label: 'Sign Up' },
        h: { to: '/', label: 'Home' },
        a: { to: '/admin', label: 'Admin' }
    };

    componentDidCatch(error) {
        alert('error', error);
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const fs = new FirebaseService();
        fs.getAllUsers()
            .then((users) => {
                this.setState({
                    allUsers: users
                });
            });
    };

    render() {
        return (
            <Router>
                <div className="app">
                    <header>
                        <Route path="/" exact component={ () =>
                            <AppHeader buttons={[this.nav.si,this.nav.su,this.nav.a]}/>} />
                        <Route path="/sign-in" component={ () =>
                            <AppHeader buttons={[this.nav.h,this.nav.su]}/>} />
                        <Route path='/sign-up' component={ () =>
                            <AppHeader buttons={[this.nav.h,this.nav.si]}/>} />
                    </header>

                    <main className="main mx-auto">
                        <Route exact path="/" component={ WelcomeScreen } />
                        <Route path="/sign-up" component={ SignUpForm } />
                        <Route path="/sign-in" component={ SignInForm } />
                        <Route path="/admin" component={ () =>
                            <UsersTable allUsers={ this.state.allUsers }/>} />
                    </main>

                    <Route exact path="/" component={ AppFooter } />
                    <ToastsContainer store={ ToastsStore } />
                </div>
            </Router>
        );
    }
};
