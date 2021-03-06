// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ4MJHCQtsLnuYG3oy1f9RGTRJefRPkWc",
  authDomain: "portfolio-3e8aa.firebaseapp.com",
  projectId: "portfolio-3e8aa",
  storageBucket: "portfolio-3e8aa.appspot.com",
  messagingSenderId: "817770619179",
  appId: "1:817770619179:web:188a4db6eb297fbc03a56e",
  measurementId: "G-ETN5EK5VG2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


