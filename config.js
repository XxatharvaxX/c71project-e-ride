import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpCb7TUBGpF0nLRFDWNzRm-GmwmexDQ1E",
  authDomain: "e-ride-899f9.firebaseapp.com",
  projectId: "e-ride-899f9",
  storageBucket: "e-ride-899f9.appspot.com",
  messagingSenderId: "651558030235",
  appId: "1:651558030235:web:64ed194731165cabce2f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
