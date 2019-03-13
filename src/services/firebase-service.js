import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import React, { Fragment } from "react";
import * as  alert from 'alert';

const _conf = {
    app: {
        apiKey: "AIzaSyAmCCaTn6XBU3Js_QKdhRyW4Ja7xzqCgWU",
        authDomain: "horizont-jobs-jl.firebaseapp.com",
        databaseURL: "https://horizont-jobs-jl.firebaseio.com",
        projectId: "horizont-jobs-jl",
        storageBucket: "horizont-jobs-jl.appspot.com",
        messagingSenderId: "123865770797"
    },
    ui: {
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInOptions: [{
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
                type: 'image',
                size: 'invisible',
                badge: 'bottomright'
            },
            defaultCountry: 'UA',
            loginHint: '+380112233444',
            whitelistedCountries: ['UA', 'CZ', 'SK']
        }]
    }
};


export default class FirebaseService {

    _app = firebase.app();
    _ui = firebaseui.auth.AuthUI.getInstance();
    _db = this._app.firestore();
    _users = this._db.collection('users');

    startFirebaseUI = (id, signInSuccessWithAuthResult, uiShown, tosUrl, privacyPolicyUrl) => {

        this._ui.start(`#${id}`, {
            callbacks: {
                signInSuccessWithAuthResult,
                uiShown
            },
            tosUrl,
            privacyPolicyUrl,
            ..._conf.ui
        });
    };

    /**
     * Добавляет польхователя в Firestore
     * @param user {Object}
     */
    addUser = user => {
        this._users.add(user)
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

export const FirebaseApp = (props) => {
    try {
        firebase.initializeApp(_conf.app);
        new firebaseui.auth.AuthUI(firebase.app().auth());
    } catch (e) {
        console.log(e);
    }

    return <Fragment>{props.children}</Fragment>;
};