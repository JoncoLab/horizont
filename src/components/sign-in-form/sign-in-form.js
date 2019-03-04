import React from 'react';
import './sign-in-form.css';

const SignInForm = () => (
    <form className="card border-primary p-5">
        <fieldset>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
        </fieldset>
        <fieldset className="btn-group">
            <button type="submit" className="btn btn-primary ml-auto btn-lg">Login</button>
        </fieldset>
    </form>
);

export default SignInForm;