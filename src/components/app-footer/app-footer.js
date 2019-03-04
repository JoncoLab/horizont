import React from 'react';
import './app-footer.css';

const footerTitle = () => (
    <div>
        <legend>На зв'язку!</legend>
        <p>У Вас залишилися питання, або виникли пропозиції? Ми із задоволенням готові прислухатися до Вас!
            Заповніть форму нижче, або оберіть будь-який зручний Вам спосіб коммунікації:</p>
    </div>
);


const footerForm = () => (
    <section id="footer">
        <div className={"inner"}>
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">ІМ'Я</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameField"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailField"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Textarea">ВАШЕ ПОВІДОМЛЕННЯ</label>
                        <textarea className="form-control" id="Textarea" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">НАДІСЛАТИ</button>
                </fieldset>
            </form>
            <ul className="contact">
                <li className="fa-home">
                    Horizont Jobs<br/>
                    88018, вул. Вулична, №2894<br/>
                    м. Ужгород, Україна
                </li>
                <li className="fa-phone">+380 (00) 111 1111</li>
                <li className="fa-phone">+420 (00) 222 2222</li>
                <li className="fa-envelope"><a href="#">information@horizontjobs.com</a></li>
                <li className="fa-facebook"><a href="#">facebook.com/horizont-jobs</a></li>
                <li className="fa-paper-plane"><a href="#">@horizontjobs</a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Horizont 2018. All rights reserved.</li>
                <li>Design: <a href="https://joncolab.pro">Jonco Lab</a></li>
            </ul>
        </div>
    </section>
);

const AppFooter = () => <footer>
    {footerTitle()}
    {footerForm()}
</footer>;

export default AppFooter;