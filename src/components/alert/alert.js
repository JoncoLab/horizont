import React from 'react';
import './alert.css';

const Alert = ({ message, type}) => {

    const valid = ['primary', 'danger', 'warning'].find((i) => type === i);

    if (!valid) {
        type = 'primary'
    }


    const classNames = `alert alert-dismissible alert-${type}`;

    return (
        <div id="alert" className={classNames}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">{type}!</h4>
            <p className="mb-0">{message}</p>
        </div>
    )
};

export default Alert;