import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "91MejiYzInH091RnX4LXjuYjyJmZCt7JN7G73Yu1",
  authDomain: "limwa-6200b.firebaseapp.com",
  databaseURL: "https://limwa-6200b.firebaseio.com",
  projectId: "limwa-6200b",
  storageBucket: "limwa-6200b.appspot.com",
  messagingSenderId: "877129690500",
  appId: "1:877129690500:web:5e8bb06db9c60a9e1d81d1",
  measurementId: "G-G8KSC8WVVT",
});

ReactDOM.render(
  <React.StrictMode>
    <App token="etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u" />
  </React.StrictMode>,
  document.getElementById("root")
);
