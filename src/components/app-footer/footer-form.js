import React from 'react';

const FooterForm = () => (
    <footer className="container">
        <div className="row">
            <form method="post" className="col-md" id="table">
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
                        <textarea className="form-control" id="Textarea" rows="3" defaultValue=""/>
                    </div>

                    <button type="submit" className="btn btn-primary">НАДІСЛАТИ</button>
                </fieldset>
            </form>
            <ul className="col-md" id="footerUl">
                <li className="fa-home">
                    Horizont Jobs<br/>
                    88018, вул. Вулична, №2894<br/>
                    м. Ужгород, Україна
                </li>
                <li className="fa-phone">+380 (00) 111 1111</li>
                <li className="fa-phone">+420 (00) 222 2222</li>
                <li className="fa-envelope"><a href="/">information@horizontjobs.com</a></li>
                <li className="fa-facebook"><a href="/">facebook.com/horizont-jobs</a></li>
                <li className="fa-paper-plane"><a href="/">@horizontjobs</a></li>
            </ul>
        </div>
    </footer>
);

export default FooterForm;