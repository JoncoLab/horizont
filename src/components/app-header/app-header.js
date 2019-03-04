import React from 'react';
import './app-header.css';
import { Link } from "react-router-dom";

const AppHeader = ({ buttons }) => (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Horizont Jobs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
            <ul className="navbar-nav">
                {
                    buttons.map(({ to, label, type }) => (
                        <li key={ label.toLowerCase().replace(/ /g, '') } className="nav-item m-2">
                            <Link className={`nav-link btn btn-${ type } btn-lg`} to={ to }>{ label }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
);

export default AppHeader;