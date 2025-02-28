// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtmoVSalDDFV1vixERhPLIL__4Uj0E0YM",
    authDomain: "mojri-8a90c.firebaseapp.com",
    projectId: "mojri-8a90c",
    storageBucket: "mojri-8a90c.appspot.com",
    messagingSenderId: "862800298792",
    appId: "1:862800298792:web:178482040bc7741d44061d",
    measurementId: "G-LRE21Z3QVG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;
