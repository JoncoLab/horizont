import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseApp } from "./services/firebase-service";
import 'bootstrap';

/**
 * @const root {<FirebaseApp children={function}">} - обёртка для приложения, которая служить для инициализации Firebase
 */
const root = (
    <FirebaseApp>
        <App />
    </FirebaseApp>
);

render(root,
    document.getElementById('root'));
