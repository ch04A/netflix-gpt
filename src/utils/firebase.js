// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuQEbgi7z6w8mTUONf4Kv9i4vji-1a_qw",
  authDomain: "netflixgpt-4089a.firebaseapp.com",
  projectId: "netflixgpt-4089a",
  storageBucket: "netflixgpt-4089a.firebasestorage.app",
  messagingSenderId: "701981322549",
  appId: "1:701981322549:web:567afe0c7b699971cdf07c",
  measurementId: "G-MM1SK8EPHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
