import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA8ULK5fn_7gxKnYtxlLqMGUxUBaKZXPQ",
  authDomain: "socia-6389a.firebaseapp.com",
  projectId: "socia-6389a",
  storageBucket: "socia-6389a.appspot.com",
  messagingSenderId: "717134017380",
  appId: "1:717134017380:web:7ca3fc52642d4b09188071",
  measurementId: "G-REBGMPHZ0T",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider(auth);

export { db, auth, provider };
