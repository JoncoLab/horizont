import InputField from '../input-field';
import React from 'react';

const Form = ({onSubmit, fields, id}) => (
    <form className="sign-in-form" onSubmit={onSubmit} method="post">
        {
            fields.map((field) =>
            <InputField { ...field} key={field.name}  />)
        }
        <div className="button-container">
            <input type="submit" id={ id } name="submit" value="Увійти" className="btn"/>
        </div>

    </form>
);

export default Form;