import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJNTbJwsAwrDpANkLv4pDWHm-IoF4S1Fg",
  authDomain: "vistrit-email.firebaseapp.com",
  projectId: "vistrit-email",
  storageBucket: "vistrit-email.appspot.com",
  messagingSenderId: "112317887339",
  appId: "1:112317887339:web:d2f805f19c70aa9269d22e",
  measurementId: "G-52JWK6B22H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
