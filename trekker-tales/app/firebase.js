// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9GC8RaDkUqIkzqU7B_MCl4L5S7qhnEIU",
  authDomain: "trekker-tales-ba03d.firebaseapp.com",
  projectId: "trekker-tales-ba03d",
  storageBucket: "trekker-tales-ba03d.appspot.com",
  messagingSenderId: "328755782587",
  appId: "1:328755782587:web:9c914b0285eb4b112f1a9e",
  measurementId: "G-1WV67E0WCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
