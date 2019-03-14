import Field from "./field";
import React from "react";

const Form = ({ onSubmit, fields }) => (
    <form className="sign-up-form" onSubmit={ onSubmit } method="post">
        {
            fields.map((field) =>
                <Field { ...field } key={ field.name } />)
        }
        <Field label="Наявність документів">
            <input id="docTrue" type="radio" name="doc" value="true" defaultChecked required/>
            <label htmlFor="docTrue">У мене є закордонний паспорт</label>
        </Field>
        <Field>
            <input id="docFalse" type="radio" name="doc" value="false" required/>
            <label htmlFor="docFalse">У мене немає закордонного паспорту</label>
        </Field>
        <div className="button-container">
            <input type="submit" name="submit" value="Зареєструватися" className="btn"/>
        </div>
    </form>
);

export default Form;