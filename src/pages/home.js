import React from 'react';
import AppHeader from "../components/app-header";

const Home = () => {

    const buttons = [
        { to: '/sign-in', label: 'Sign In', type: 'secondary' },
        { to: '/sign-up', label: 'Sign Up', type: 'primary' }
    ];

    return (
        <div className="home">
            <AppHeader buttons={ buttons }/>
            <main className="main">
                <h2>Ще ніколи робота за кордоном не була такою доступною!</h2>
            </main>
        </div>
    );
};

export default Home;