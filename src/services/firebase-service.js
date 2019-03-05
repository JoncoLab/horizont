import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class FirebaseService {

    constructor() {
        const _config = {
            apiKey: "AIzaSyAmCCaTn6XBU3Js_QKdhRyW4Ja7xzqCgWU",
            authDomain: "horizont-jobs-jl.firebaseapp.com",
            databaseURL: "https://horizont-jobs-jl.firebaseio.com",
            projectId: "horizont-jobs-jl",
            storageBucket: "horizont-jobs-jl.appspot.com",
            messagingSenderId: "123865770797"
        };

        firebase.initializeApp(_config);
        this.users = firebase.firestore().collection("users");
    }

    addUser = user => {
        this.users.add(user)
            .catch((reason) => {
                alert(reason);
            });
    };

    getAllUsers = () => async () => await this.users.get().then(
            ({docs}) => {
                return [
                    ...docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                ];
            });

}