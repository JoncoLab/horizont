import {Link} from "react-router-dom";
import React from "react";

const SignedUpScreen = () => (
    <div className="jumbotron" id="welcome-screen-item">
        <h2 className="display-5">Вас було успішно зареєстровано!</h2>
        <p className="lead">Будь ласка, підтвердіть Ваш номер мобільного, увійшовши до кабінету.</p>
        <hr className="my-4"/>
        <p className="lead">
            <Link className="btn btn-primary btn-lg" id="welcome-button" to="/sign-in" role="button">Увійти до кабінету</Link>
        </p>
    </div>
);

export default SignedUpScreen;