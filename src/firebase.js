import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmga9ziWgmlIHknX6_1xtjOZgtY4xMIrM",
    authDomain: "axl-hub.firebaseapp.com",
    projectId: "axl-hub",
    storageBucket: "axl-hub.appspot.com",
    messagingSenderId: "871562795092",
    appId: "1:871562795092:web:b570aac75a1d955218f5c1",
    measurementId: "G-GVJBEP3ZLK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };