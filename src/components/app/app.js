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

export default class App extends Component {

    nav = {
        si: { to: '/sign-in', label: 'Sign In' },
        su: { to: '/sign-up', label: 'Sign Up' },
        h: { to: '/', label: 'Home' }
    };

    componentDidCatch(error) {
        alert('error', error);
    };

    render() {

        return (
            <Router>
                <div className="app">
                    <header>
                        <Route path="/" exact component={ () =>
                            <AppHeader buttons={[this.nav.si,this.nav.su]}/>} />
                        <Route path="/sign-in" component={ () =>
                            <AppHeader buttons={[this.nav.h,this.nav.su]}/>} />
                        <Route path='/sign-up' component={ () =>
                            <AppHeader buttons={[this.nav.h,this.nav.si]}/>} />
                    </header>

                    <main className="main mx-auto">
                        <Route exact path="/" component={ WelcomeScreen } />
                        <Route path="/sign-up" component={ SignUpForm } />
                        <Route path="/sign-in" component={ SignInForm } />
                    </main>

                    <Route exact path="/" component={ AppFooter } />
                    <ToastsContainer store={ ToastsStore } />
                </div>
            </Router>
        );
    }
};
