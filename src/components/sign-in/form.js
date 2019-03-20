import InputField from '../input-field';
import PropTypes from 'prop-types';
import React from 'react';
import Preloader from "../preloader";

const Form = ({ onSubmit, fields, preloader, confirmation, handleConfirmation }) => {

    const onChange = event => {
        const val = event.target.value;

        if (val.length === 6) {
            handleConfirmation(val);
        }
    };
    const content = fields.map((field) =>
        <InputField { ...field} key={field.name} onChange={ confirmation ? onChange : () => null } />);
    const display = preloader ? <Preloader/> : content;

    return (
        <form className="sign-in-form" onSubmit={ onSubmit } method="post">
            { display }
            <div className="button-container">
                <input
                    style={{
                        transform: confirmation ? 'scale(0)' : 'none',
                        position: confirmation ? 'absolute' : 'relative'
                    }}
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
    confirmation: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired
};

export default Form;