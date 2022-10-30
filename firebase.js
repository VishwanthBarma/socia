// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA8ULK5fn_7gxKnYtxlLqMGUxUBaKZXPQ",
  authDomain: "socia-6389a.firebaseapp.com",
  projectId: "socia-6389a",
  storageBucket: "socia-6389a.appspot.com",
  messagingSenderId: "717134017380",
  appId: "1:717134017380:web:7ca3fc52642d4b09188071",
  measurementId: "G-REBGMPHZ0T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp;
const analytics = getAnalytics(app);
const db = getFirestore();
const storage= getStorage();

export{ app,db,storage};