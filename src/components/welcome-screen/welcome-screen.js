import React from 'react';
import { Link } from 'react-router-dom';
import './welcome-screen.css';

const WelcomeScreen = () => (
	<section className="welcome-screen m-5">
		<div className="jumbotron" id="welcome-screen-item">
			<h2 className="display-5">Вітаємо на Horizont Jobs!</h2>
			<p className="lead">Ще ніколи робота за кордоном не була такою доступною!</p>
			<hr className="my-4"/>
			<p>It uses utility classes for typography and spacing to space content out within the larger
				container.</p>
			<p className="lead">
				<Link className="btn btn-primary btn-lg" id="welcome-button" to="/sign-up"
				      role="button">Зареєструватися</Link>
			</p>
		</div>
	</section>
);

export default WelcomeScreen;