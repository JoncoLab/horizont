import React from 'react';
import { render } from 'react-dom';
import App from "./components/app";
import 'bootstrap';
import 'bootswatch/dist/darkly/bootstrap.min.css';
// my font SVG ico
import 'font-awesome/css/font-awesome.min.css';

/***
 * Ссылка на библиотеку с темой: https://bootswatch.com/darkly/
 */

render(<App/>,
    document.getElementById('root'));
