import InputField from '../input-field';
import PropTypes from 'prop-types';
import React from 'react';
import Preloader from "../preloader";

const Form = ({ onSubmit, fields, preloader, confirmation }) => {

    const content = fields.map((field) =>
        <InputField { ...field} key={field.name}  />);
    const display = preloader ? <Preloader/> : content;

    const confirmSubmit = confirmation ? <input type="submit"
                                                id="confirmation-code-submit"
                                                name="confirmation-code-submit"
                                                disabled={ preloader }
                                                value="Надіслати код"
                                                className="btn" /> : null;

    return (
        <form className="sign-in-form" onSubmit={ onSubmit } method="post">
            { display }
            <div className="button-container">
                <input
                    type="submit"
                    id={ confirmation ? '' : 'sign-in-submit' }
                    name="submit"
                    disabled={ preloader }
                    value="Увійти"
                    className="btn" />
            </div>
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })),
    preloader: PropTypes.bool.isRequired,
    confirmation: PropTypes.bool.isRequired
};

export default Form;