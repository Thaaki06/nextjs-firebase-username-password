import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5IcIKjYW_n9nDEKaDGLSF5tjbCwmtiw",
  authDomain: "voting-system-3ca78.firebaseapp.com",
  projectId: "voting-system-3ca78",
  storageBucket: "voting-system-3ca78.appspot.com",
  messagingSenderId: "53983099377",
  appId: "1:53983099377:web:23ebf539467ac5d76b2c50",
  measurementId: "G-7LGTJVKVPX"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }