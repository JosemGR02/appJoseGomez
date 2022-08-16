import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDw4CEudBstJGihfWOI0k5ssz9oB8WFVUU",
    authDomain: "ecommence-proyecto-joseg.firebaseapp.com",
    projectId: "ecommence-proyecto-joseg",
    storageBucket: "ecommence-proyecto-joseg.appspot.com",
    messagingSenderId: "825687188508",
    appId: "1:825687188508:web:f1e09f8bdd428ea7a0ebd9"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
