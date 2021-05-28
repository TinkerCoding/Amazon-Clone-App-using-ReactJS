import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd--CDaktHgl_jO8PN8ioheqRz8MdzHxU",
    authDomain: "clone-58947.firebaseapp.com",
    projectId: "clone-58947",
    storageBucket: "clone-58947.appspot.com",
    messagingSenderId: "1048532592700",
    appId: "1:1048532592700:web:e7e8c5a62608aab4173b39"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
