import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAh4wAIkbo0KCiFKs9r_kiJ39rBIKNe_l8",
    authDomain: "login-auth-ca742.firebaseapp.com",
    databaseURL: "https://login-auth-ca742-default-rtdb.firebaseio.com",
    projectId: "login-auth-ca742",
    storageBucket: "login-auth-ca742.appspot.com",
    messagingSenderId: "742033829258",
    appId: "1:742033829258:web:4e4fe0b19adcb273d5ac73",
    measurementId: "G-EFJT730QXK"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const firestore = app.firestore();

// Create Google Auth Provider instance
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// Create Facebook Auth Provider instance
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, firestore, googleAuthProvider, facebookAuthProvider };
export default app;
