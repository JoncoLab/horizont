import React, {Component} from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from "../app-header";
import { AppFooter } from "../app-footer";
import WelcomeScreen from "../welcome-screen";
import SignUp from "../sign-up";
import SignIn from "../sign-in";

import { ToastsContainer, ToastsStore } from 'react-toasts';
import { alert } from "../../services";
import UsersTable from "../users-table";

export default class App extends Component {

    nav = {
        si: { to: '/sign-in', label: 'Увійти' },
        su: { to: '/sign-up', label: 'Зареєструватися' },
        h: { to: '/', label: 'Домашня сторінка' },
        a: { to: '/admin', label: 'Admin' },
        lo: { to: '/log-out', label: 'Вийти' }
    };

    componentDidCatch(error) {
        alert(error, 'error');
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
                        <Route path="/sign-up" component={ () =>
                            <AppHeader buttons={[this.nav.h,this.nav.si]}/>} />
                        <Route path="/user-page" component={ () =>
                            <AppHeader buttons={[this.nav.lo]}/>}/>
                        <Route path="/admin" component={ AppHeader } />
                    </header>

                    <main className="main mx-auto mt-2">
                        <Route exact path="/" component={ WelcomeScreen } />
                        <Route path="/sign-in" component={ SignIn } />
                        <Route path="/sign-up" component={ SignUp } />
                        {/*<Route path="/user-page" component={ UserPage } />*/}
                        <Route path="/admin" component={ UsersTable } />
                    </main>

                    <footer>
                        <Route exact path="/" component={ () => <AppFooter title form copyright={false}/> } />
                        <Route path="/" component={ AppFooter } />
                    </footer>

                    <ToastsContainer store={ ToastsStore } />
                </div>
            </Router>
        );
    }
};
