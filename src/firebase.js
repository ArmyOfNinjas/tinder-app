import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJ0mHgEG5pXz9-JvO9EXO2rorSfNz87Oc",
    authDomain: "tinder-app-988bd.firebaseapp.com",
    databaseURL: "https://tinder-app-988bd.firebaseio.com",
    projectId: "tinder-app-988bd",
    storageBucket: "tinder-app-988bd.appspot.com",
    messagingSenderId: "32439822745",
    appId: "1:32439822745:web:1bf8466b2923f0093d4b08",
    measurementId: "G-H0ZC0VZK9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;