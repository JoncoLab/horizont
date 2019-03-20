import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import React, { Fragment } from "react";
import alert from './alert';

const _conf = {
    app: {
        apiKey: "AIzaSyAmCCaTn6XBU3Js_QKdhRyW4Ja7xzqCgWU",
        authDomain: "horizont-jobs-jl.firebaseapp.com",
        databaseURL: "https://horizont-jobs-jl.firebaseio.com",
        projectId: "horizont-jobs-jl",
        storageBucket: "horizont-jobs-jl.appspot.com",
        messagingSenderId: "123865770797"
    }
};

const FirebaseApp = ({ children }) => {

    firebase.initializeApp(_conf.app);

    return <Fragment>{ children }</Fragment>;
};


class FirebaseService {

    _app = firebase.app();
    _auth = firebase.auth();
    _db = this._app.firestore();
    _users = this._db.collection('users');
    _messages = this._db.collection('messages');

    /**
     * Добавление нового пользователя в базу данных
     * @param user
     * @returns {Promise<firebase.firestore.DocumentReference>}
     */
    addUser = async user => {
        return await this._users.add(user)
            .catch((reason) => {
                alert(reason);
            });
    };

    /**
     * Добавление сообщения от пользователя в базу данных
     * @param message
     * @returns {Promise<firebase.firestore.DocumentReference>}
     */
    addMessage = async message => {
        return await this._messages.add(message)
            .then(() => {
                console.log(message);
            })
            .catch((reason) => {
                alert(reason);
            });
    };

    /**
     * Получение всех пользователей;
     * @returns {Promise<...[]>} - возвращает массив с объектами пользовтелей
     */
    getAllUsers = async () => await this._users.get()
        .then(({ docs }) => {
            return [ ...docs.map( (doc) =>
                ({ id: doc.id, ...doc.data() }) )];
        },(reason) =>  {
            alert(reason)
        });

    /**
     * Получение всех сообщений от пользователей;
     * @returns {Promise<...[]>} - возвращает массив с объектами сообщений
     */
    getAllMessages = async () => await this._messages.get()
        .then(({ docs }) => {
            return [ ...docs.map( (doc) =>
                ({id: doc.id, ...doc.data() }) )];
        }, (reason) => {
            alert(reason)
        });

    /**
     * Инициализация reCAPTCHA
     * @param submitButtonId - контейнер
     * @param successCallback - вызываеться, когда капча успешно пройдена
     * @returns {Promise<number>} - на всякий случай возвращает widgetId
     */
    setUpGoogleReCaptcha = (submitButtonId, successCallback) => {

        this._auth.useDeviceLanguage();

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(submitButtonId, {
            'size': 'invisible',
            'callback': successCallback
        });

        return window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        }, (reason) => {
            console.log(reason);
            alert('Виникла проблема із сервісом reCAPTCHA! Спробуйте, будь ласка пізніше.', 'warning');
        });
    };

    /**
     * Вход в приложение по указанному телефону
     * @param tel
     * @returns {Promise<firebase.auth.ConfirmationResult>}
     */
    signInUser = async (tel, uid) => {
        return await this._auth.signInWithPhoneNumber(tel, window.recaptchaVerifier)
            .then(({ verificationId }) => {
                window.verificationId = verificationId;
            });
    };

    /**
     * Проверка кода подтверждения и возврат объекта user
     * @param code
     * @returns {Promise<firebase.User>}
     */
    confirmSignIn = async (code) => {

        const credential = firebase.auth.PhoneAuthProvider.credential(window.verificationId, code);

        return await this._auth.signInAndRetrieveDataWithCredential(credential)
            .then((userCredential) => userCredential.user);
    }
}

export {
    FirebaseService,
    FirebaseApp
}