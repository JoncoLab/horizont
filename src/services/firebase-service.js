import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class FirebaseService {

    _config = {
        apiKey: "AIzaSyAmCCaTn6XBU3Js_QKdhRyW4Ja7xzqCgWU",
        authDomain: "horizont-jobs-jl.firebaseapp.com",
        databaseURL: "https://horizont-jobs-jl.firebaseio.com",
        projectId: "horizont-jobs-jl",
        storageBucket: "horizont-jobs-jl.appspot.com",
        messagingSenderId: "123865770797"
    };

    constructor() {
        firebase.initializeApp(this._config);
        this.db = firebase.firestore();
    };

    apiDiscoveryUrl = async name => {
        const response = await fetch(
            `https://content.googleapis.com/discovery/v1/apis?
            name=${name}&
            preferred=true&
            fields=items(name,discoveryRestUrl)&
            key=${this._config.apiKey}`
        );

        return response.json();
    };

    /*
    * discoverApi = async (
        apiUrl = this.apiDiscoveryUrl('firestore'),
        fields = 'resources',
        prettyPrint = true,
        key = this._config.apiKey
    ) => {
        const discovery = await fetch(
            `${ apiUrl }&
            alt=json&
            fields=${ fields }&
            prettyPrint=${ prettyPrint }&
            key=${ key }`
        );

        return discovery.json()
    };
    */
}