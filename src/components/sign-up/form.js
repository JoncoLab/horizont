import InputField from "../input-field";
import React from "react";
import PropTypes from 'prop-types';

const Form = ({ onSubmit, fields }) => (
    <form className="sign-up-form" onSubmit={ onSubmit } method="post">
        {
            fields.map((field) =>
                <InputField { ...field } key={ field.name } />)
        }
        <InputField label="Наявність документів">
            <input id="docTrue" type="radio" name="doc" value="true" defaultChecked required/>
            <label htmlFor="docTrue">У мене є закордонний паспорт</label>
        </InputField>
        <InputField>
            <input id="docFalse" type="radio" name="doc" value="false" required/>
            <label htmlFor="docFalse">У мене немає закордонного паспорту</label>
        </InputField>
        <div className="button-container">
            <input type="submit" name="submit" value="Зареєструватися" className="btn"/>
        </div>
    </form>
);

Form.propTypes = {
    onSubmit: PropTypes.func().isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string().isRequired,
        label: PropTypes.string().isRequired,
        type: PropTypes.string(),
        required: PropTypes.bool(),
        title: PropTypes.string(),
        noBar: PropTypes.bool()
    }))
};

export default Form;