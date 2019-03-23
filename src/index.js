import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseApp } from "./services/firebase-service";
import 'bootstrap';

/**
 * @const root {<FirebaseApp app={Component}">} - обёртка для приложения, которая служить для инициализации Firebase
 */
const root = (
    <FirebaseApp app={ App } />
);

render(root,
    document.getElementById('root'));
