import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
/**
 * my font SVG ico
 */
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseApp } from "./services/firebase-service";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap';

/***
 * @link url {theme} - Ссылка на библиотеку с темой: https://bootswatch.com/darkly/
 */

const root = (
    <FirebaseApp>
        <App />
    </FirebaseApp>
);

render(root,
    document.getElementById('root'));
