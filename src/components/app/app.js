import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../app-header";
import { AppFooter } from "../app-footer";
import WelcomeScreen from "../welcome-screen";
import SignUp from "../sign-up";
import SignIn from "../sign-in";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { alert, AuthWrapper } from "../../services";
import Admin from "../admin";
import UserPage from "../user-page";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import NotFound from "../not-found";
import LogOut from "../log-out";

export default class App extends Component {

    /**
     * Набор всех доступных кнопок
     * @field nav {name?:{to:string,label:string}}
     */
    nav = {
        si: { to: '/sign-in', label: 'Увійти' },
        su: { to: '/sign-up', label: 'Зареєструватися' },
        h: { to: '/', label: 'Домашня сторінка' },
        lo: { to: '/log-out', label: 'Вийти' },
        up: { to: '/user-page', label: 'В кабінет'}
    };

    componentDidCatch(error) {
        console.log(error);
        alert(error.message, 'error');
    };

    render() {
        
        const { si, su, h, lo, up } = this.nav;
        const { auth } = this.props;
        
        return (
            <Router>
                {/**
                 * Сборка основных елементов страницы в зависимости от страницы
                */}
                <div className="app">
                    <header>
                        <Switch>
                            <Route path="/" exact component={ () =>
                                <AppHeader buttons={ auth ? [ lo, up ] : [ si, su ] } />} />
                            <Route path="/sign-in" component={ () =>
                                <AppHeader buttons={ [ h, su ] } />} />
                            <Route path="/sign-up" component={ () =>
                                <AppHeader buttons={ [ h, si ] } />} />
                            <Route path="/user-page" component={ () =>
                                <AppHeader buttons={ [ lo, h ] } />} />
                            <Route path="/admin" component={ AppHeader } />
                            <Route component={ AppHeader } />
                        </Switch>
                    </header>

                    <main className="main mx-auto mt-2">
                        <Switch>
                            <Route exact path="/" component={ WelcomeScreen } />
                            <AuthWrapper path="/sign-in" auth={ auth } component={ SignIn }/>
                            <AuthWrapper path="/sign-up" auth={ auth } component={ SignUp }/>
                            <Route path="/user-page" component={ UserPage } />
                            <Route path="/admin" component={ Admin } />
                            <Route path="/log-out" component={ LogOut } />
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
