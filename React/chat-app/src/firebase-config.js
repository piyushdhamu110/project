// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNnUf4A5axf5TIipw481HQsqzpG17o4BQ",
  authDomain: "chat-app-9071d.firebaseapp.com",
  projectId: "chat-app-9071d",
  storageBucket: "chat-app-9071d.appspot.com",
  messagingSenderId: "629252840040",
  appId: "1:629252840040:web:44eddbbe9981da7f92b9dd",
  measurementId: "G-04WQKJTX2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
