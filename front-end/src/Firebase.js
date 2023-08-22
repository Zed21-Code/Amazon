// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-vnCAI7ix8ygvanf2jN7C7XkRrECiN04",
  authDomain: "clone-f4db1.firebaseapp.com",
  projectId: "clone-f4db1",
  storageBucket: "clone-f4db1.appspot.com",
  messagingSenderId: "725847410579",
  appId: "1:725847410579:web:affac7904abe712b168a66",
  measurementId: "G-Z1KF6GMBEY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = app.firestore()

export {auth, db}