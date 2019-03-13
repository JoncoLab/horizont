import React, {Component, Fragment} from 'react';
import './sign-up-form.css';
import Preloader from "../preloader";

class SignUpForm extends Component {

    state = {
        preloader: false
    };

    fields = [
        { name: 'first_name', label: 'Ім\'я' },
        { name: 'last_name', label: 'Прізвище' },
        { name: 'middle_name', label: 'По-батькові' },
        { name: 'email', label: 'Email', type: 'email', required: false },
        { name: 'tel', label: 'Номер мобільного', type: 'tel', title: '+380112222222' },
        { name: 'profession', label: 'Ваша професія' },
        { name: 'location', label: 'Ваша адреса' },
        { name: 'birthday', label: 'Дата народження', type: 'date' },
        { name: 'soft_skills', label: 'Перерахуйте свої корисні навички та вміння через кому' }
    ];

    getInput = name => document.getElementsByName(name)[0].value;

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ preloader: true });
        const values = [
            ...this.fields.map(({ name }) => (
                { name, value: this.getInput(name) }
            ))
        ];
        values.push({ name: 'doc', value: this.getInput('doc') });
        console.log(values);
    };

    render() {

        return (
            <form onSubmit={ this.handleSubmit } method="post">
                {
                    this.fields.map((field) =>
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
                    {
                        this.state.preloader ?
                            <Preloader/> :
                            <input type="submit" name="submit" value="Зареєструватися" className="btn"/>
                    }
                </div>
            </form>
        );
    }
}


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

export default SignUpForm;