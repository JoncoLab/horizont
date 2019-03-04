import React from 'react';
import './app-header.css';
import { Link } from "react-router-dom";

const AppHeader = () => (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Horizont Jobs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
            <ul className="navbar-nav">
                <li className="nav-item m-2">
                    <Link className="nav-link btn btn-secondary btn-lg" to="/sign-in">Sign In</Link>
                </li>
                <li className="nav-item m-2">
                    <Link className="nav-link btn btn-primary btn-lg" to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </div>
    </header>
);

export default AppHeader;