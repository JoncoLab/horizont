import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'bootstrap';
import 'bootswatch/dist/darkly/bootstrap.min.css';

/***
 * Ссылка на библиотеку с темой: https://bootswatch.com/darkly/
 */

render(<App/>,
    document.getElementById('root'));
