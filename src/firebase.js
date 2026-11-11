// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// ADDED: Import Firebase Analytics
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// This is the object you copied from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBFAJ2qClsFy-Ja6J67MwvEHDQiJYUAeQA",
  authDomain: "arvion-website.firebaseapp.com",
  projectId: "arvion-website",
  storageBucket: "arvion-website.appspot.com", // Corrected to appspot.com
  messagingSenderId: "641899790684",
  appId: "1:641899790684:web:ff63eb46757e9e3ebb0199",
  measurementId: "G-9N4DBGEHWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the services we need
export const db = getFirestore(app);
export const auth = getAuth(app);
// ADDED: Initialize and export Analytics
// Analytics needs a browser; skip it when pages are prerendered in Node.
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
