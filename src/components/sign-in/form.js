import InputField from '../input-field';
import PropTypes from 'prop-types';
import React from 'react';
import Preloader from "../preloader";

const Form = ({ onSubmit, fields, preloader }) => {

    const content = fields.map((field) =>
        <InputField { ...field} key={field.name}  />);
    const display = preloader ? <Preloader/> : content;

    return (
        <form className="sign-in-form" onSubmit={ onSubmit } method="post">
            { display }
            <div className="button-container">
                <input
                    type="submit"
                    id="sign-in-submit"
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
    preloader: PropTypes.bool.isRequired
};

export default Form;