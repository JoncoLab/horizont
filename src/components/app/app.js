import React, {Component} from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../app-header";
import { AppFooter } from "../app-footer";
import WelcomeScreen from "../welcome-screen";
import SignUp from "../sign-up";
import SignIn from "../sign-in";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { alert } from "../../services";
import Admin from "../admin";
import UserPage from "../user-page";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import NotFound from "../not-found";

export default class App extends Component {

    /**
     * Набор всех доступных кнопок
     * @field nav {name?:{to:string,label:string}}
     */
    nav = {
        si: { to: '/sign-in', label: 'Увійти' },
        su: { to: '/sign-up', label: 'Зареєструватися' },
        h: { to: '/', label: 'Домашня сторінка' },
        a: { to: '/admin', label: 'Admin' },
        lo: { to: '/log-out', label: 'Вийти' },
        up: { to: '/user-page', label: 'В кабінет'}
    };

    componentDidCatch(error) {
        alert(error, 'error');
    };

    render() {
        return (
            <Router>
                {/**
                 * Сборка основных елементов страницы в зависимости от страницы
                */}
                <div className="app">
                    <header>
                        <Switch>
                            <Route path="/" exact component={ () =>
                                <AppHeader buttons={[this.nav.up,this.nav.si,this.nav.su]}/>} />
                            <Route path="/sign-in" component={ () =>
                                <AppHeader buttons={[this.nav.h,this.nav.su]}/>} />
                            <Route path="/sign-up" component={ () =>
                                <AppHeader buttons={[this.nav.h,this.nav.si]}/>} />
                            <Route path="/user-page" component={ () =>
                                <AppHeader buttons={[this.nav.lo,this.nav.h]}/>}/>
                            <Route path="/admin" component={ AppHeader } />
                            <Route component={ AppHeader }/>
                        </Switch>
                    </header>

                    <main className="main mx-auto mt-2">
                        <Switch>
                            <Route exact path="/" component={ WelcomeScreen } />
                            <Route path="/sign-in" component={ SignIn } />
                            <Route path="/sign-up" component={ SignUp } />
                            <Route path="/user-page" component={ UserPage } />
                            <Route path="/admin" component={ Admin } />
                            <Route component={ NotFound }/>
                        </Switch>
                    </main>

                    <footer>
                        <Switch>
                            <Route exact path="/" component={ () => <AppFooter title form /> } />
                            <Route component={ AppFooter } />
                        </Switch>
                    </footer>

                    {/**
                    * Контейнер для кастомных уведомлений через функцию alert()
                    */}
                    <ToastsContainer store={ ToastsStore } />
                </div>
            </Router>
        );
    }
};
