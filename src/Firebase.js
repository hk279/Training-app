import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "training-diary-262018.firebaseapp.com",
    databaseURL: "https://training-diary-262018.firebaseio.com",
    projectId: "training-diary-262018",
    storageBucket: "training-diary-262018.appspot.com",
    messagingSenderId: "460886223966",
    appId: "1:460886223966:web:8258f62761ef0b8545d8cf",
});

export default app;
