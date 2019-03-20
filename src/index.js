import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'font-awesome/css/font-awesome.min.css';
import { FirebaseApp } from "./services/firebase-service";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap';

const root = (
    <FirebaseApp>
        <App />
    </FirebaseApp>
);

render(root,
    document.getElementById('root'));
