import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBNyN8iCAWV3owMhaULO0RwacyPGTSta24",
    authDomain: "incrementum-9052d.firebaseapp.com",
    databaseURL: "https://incrementum-9052d.firebaseio.com",
    projectId: "incrementum-9052d",
    storageBucket: "incrementum-9052d.appspot.com",
    messagingSenderId: "912621220290",
    appId: "1:912621220290:web:1e58b44ed9997fc6d5a65b",
}
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.firestore();
