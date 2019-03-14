import Field from "./sign-up";
import React from "react";

const Form = ({ onSubmit, fields }) => (
    <form className="sign-up-form" onSubmit={ onSubmit } method="post">
        {
            fields.map((field) =>
                <Field { ...field } key={ field.name } />)
        }
        <Field label="Hui">
            <input type="radio" name="doc" value="true" required/>
            <span>У мене є закордонний паспорт</span>
        </Field>
        <Field>
            <input type="radio" name="doc" value="false" required/>
            <span>У мене немає закордонного паспорту</span>
        </Field>
        <div className="button-container">
            <input type="submit" name="submit" value="Зареєструватися" className="btn"/>
        </div>
    </form>
);

export default Form;