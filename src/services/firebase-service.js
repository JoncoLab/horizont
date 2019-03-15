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
    try {
        firebase.initializeApp(_conf.app);
    } catch (e) {
        console.log(e);
    }

    return <Fragment>{ children }</Fragment>;
};


class FirebaseService {

    _app = firebase.app();
    _db = this._app.firestore();
    _users = this._db.collection('users');
    _messages = this._db.collection('messages');

    /**
     * Добавляет польхователя в Firestore
     * @param user {Object}
     */

    addUser = async user => {
        return await this._users.add(user)
            .catch((reason) => {
                alert(reason);
            });
    };

    addMessage = async message => {
        return await this._messages.add(message)
            .then(() => {
                console.log(message);
            })
            .catch((reason) => {
                alert(reason);
            });
    };


    getAllUsers = async () => await this._users.get()
            .then(({docs}) =>
                [ ...docs.map( (doc) =>
                    ({ id: doc.id, ...doc.data() }) )]
            )
            .catch((reason) => alert(reason));
}

export {
    FirebaseService,
    FirebaseApp
}