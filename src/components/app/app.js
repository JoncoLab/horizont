import React, { Component } from 'react';
import './app.css';
import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <AppHeader/>

                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />

                    <AppFooter/>
                </div>
            </Router>
        );
    }
};
