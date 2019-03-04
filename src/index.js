import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'bootstrap';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAmCCaTn6XBU3Js_QKdhRyW4Ja7xzqCgWU",
    authDomain: "horizont-jobs-jl.firebaseapp.com",
    databaseURL: "https://horizont-jobs-jl.firebaseio.com",
    projectId: "horizont-jobs-jl",
    storageBucket: "horizont-jobs-jl.appspot.com",
    messagingSenderId: "123865770797"
};

firebase.initializeApp(config);

/***
 * Ссылка на библиотеку с темой: https://bootswatch.com/darkly/
 */

render(<App/>,
    document.getElementById('root'));
