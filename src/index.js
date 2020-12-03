import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNHgTgSJQyrF0IHwRddQHgSR_GEGOvLtQ",
    authDomain: "hhunt-1a751.firebaseapp.com",
    projectId: "hhunt-1a751",
    storageBucket: "hhunt-1a751.appspot.com",
    messagingSenderId: "347622096110",
    appId: "1:347622096110:web:4eff09523726a7117d07ff"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
