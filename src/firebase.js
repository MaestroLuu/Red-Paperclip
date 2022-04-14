import firebase from 'firebase;'

const firebaseConfig = {
    apiKey: "AIzaSyCgFi1WtoQjBoBdXZWH4Q2OSAZY7SZWnxw",
    authDomain: "redpaperclip-4950d.firebaseapp.com",
    projectId: "redpaperclip-4950d",
    storageBucket: "redpaperclip-4950d.appspot.com",
    messagingSenderId: "432460632446",
    appId: "1:432460632446:web:60f51ec78164da8836e32f",
    measurementId: "G-8VXSVHH44C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;