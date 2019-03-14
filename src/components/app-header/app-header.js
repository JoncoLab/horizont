import React from 'react';
import './app-header.css';
import { Link } from "react-router-dom";

const AppHeader = ({ buttons }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-nav-bar">
        <a className="navbar-brand fa-road" id="brand-nav-bar" href="/">orizont Jobs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
            <ul className="navbar-nav" id="buttons-nav-top">
                {
                    buttons.map(({ to, label }, i) => (
                        <li key={ label.toLowerCase().replace(/ /g, '') } className="nav-item m-2">
                            <Link className={`link ${ i < buttons.length - 1 ? 'secondary' : 'primary'}`} to={ to }>{ label }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
);

export default AppHeader;