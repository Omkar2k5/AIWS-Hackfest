import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV7-tyyXT9enFRHmC3W6150sjK8uJ2p6I",
  authDomain: "aws-translator-be003.firebaseapp.com",
  projectId: "aws-translator-be003",
  storageBucket: "aws-translator-be003.firebasestorage.app",
  messagingSenderId: "316793822083",
  appId: "1:316793822083:web:70c4239e862bf7d602b4b6",
  measurementId: "G-5H9RJK2316"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let analytics = null;
let auth = null;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  auth = getAuth(app);
}

export { app, analytics, auth }; 