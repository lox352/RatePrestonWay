import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAxD8DJ_WEPhIHvLMuN2W60GxHGb9qdGE",
    authDomain: "rate-preston-way.firebaseapp.com",
    databaseURL: "https://rate-preston-way.firebaseio.com",
    projectId: "rate-preston-way",
    storageBucket: "rate-preston-way.appspot.com",
    messagingSenderId: "1089211316580",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};