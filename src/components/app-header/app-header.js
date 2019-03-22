import React from 'react';
import './app-header.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * Рендер хедера и навигационной панели на основе данных, которые передаються в свойствах
 * @param buttons
 * @returns {*}
 * @constructor
 */
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
                            {/**
                             * Для работы с маршрутизатором вместо <a> нужно использовать <Link>
                             */}
                            <Link className={`link ${ i < buttons.length - 1 ? 'secondary' : 'primary'}`} to={ to }>{ label }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
);

AppHeader.defaultProps = {
    buttons: [ { to: '/', label: 'На головну'} ]
};

AppHeader.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    )
};

export default AppHeader;