import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


export default class FirebaseService {

    _conf = {
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
                        badge: 'inline'
                    },
                    defaultCountry: 'UK',
                    loginHint: '+380112233444'
            }]
        }
    };

    _app = () => {
        try {
            return firebase.app();
        } catch {
            return firebase.initializeApp(this._conf.app);
        }
    };

    _db = this._app().firestore();
    _users = this._db.collection("users");
    _ui = new firebaseui.auth.AuthUI(this._app().auth());

    startFirebaseUI = (id, signInSuccessWithAuthResult, uiShown, signInSuccessUrl, tosUrl, privacyPolicyUrl) => {

        this._ui.start(`#${id}`, {
            callbacks: {
                signInSuccessWithAuthResult,
                uiShown
            },
            signInSuccessUrl,
            tosUrl,
            privacyPolicyUrl
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