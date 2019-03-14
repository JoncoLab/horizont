import React, { Fragment } from 'react';

const Field = ({ name, label, type = 'text', required = true, title = null, noBar = false, children }) => {
    const defaultChildren = (
        <Fragment>
            <input type={ type }
                   id={ name }
                   name={ name }
                   required={ required }
                   title={ title }/>
            { noBar ? null : <span className="bar"/> }
            <label>{ label }</label>
        </Fragment>
    );
    return (
        <div className="field-container">
            <label className="group">
                { children ? children : defaultChildren}
            </label>
        </div>
    )
};

export default Field;