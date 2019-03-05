import React, {Component} from 'react';
import './app.css';
import AppFooter from "../app-footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';
import Home from '../../pages/home';
import FirebaseService from '../../services/firebase-service';

const fs = new FirebaseService();

const users = async () => await fs.getAllUsers();

console.log(users());

export default class App extends Component {

    render() {

        return (
            <Router>
                <div className="app">

                    <Route exact path="/" component={ Home }/>
                    <Route path="/sign-up" component={ SignUp } />
                    <Route path="/sign-in" component={ SignIn } />

                    <AppFooter/>
                </div>
            </Router>
        );
    }
};
