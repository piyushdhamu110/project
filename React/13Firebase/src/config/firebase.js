// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4xR1iSEebzdtfAxX0l_a-CFC80mWbnJw",
  authDomain: "fir-course-a2aec.firebaseapp.com",
  projectId: "fir-course-a2aec",
  storageBucket: "fir-course-a2aec.appspot.com",
  messagingSenderId: "1027170925191",
  appId: "1:1027170925191:web:f89b8865d0739dec5a5622",
  measurementId: "G-PH8YVG20K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
