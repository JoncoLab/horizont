import React, {Component} from 'react';
import './app.css';
import AppHeader from "../app-header";
import AppFooter from "../app-footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <AppFooter/>
            </div>
        );
    }
};
