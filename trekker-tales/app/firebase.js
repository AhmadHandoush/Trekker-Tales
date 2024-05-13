import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9GC8RaDkUqIkzqU7B_MCl4L5S7qhnEIU",
  authDomain: "trekker-tales-ba03d.firebaseapp.com",
  projectId: "trekker-tales-ba03d",
  storageBucket: "trekker-tales-ba03d.appspot.com",
  messagingSenderId: "328755782587",
  appId: "1:328755782587:web:9c914b0285eb4b112f1a9e",
  measurementId: "G-1WV67E0WCE",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
