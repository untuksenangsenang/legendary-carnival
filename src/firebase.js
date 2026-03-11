// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Gq9cgNEctwAMjvH6B0rT82_q9wk-1zU",
  authDomain: "portofolio-imrapii-5236f.firebaseapp.com",
  projectId: "portofolio-imrapii-5236f",
  storageBucket: "portofolio-imrapii-5236f.firebasestorage.app",
  messagingSenderId: "129491200133",
  appId: "1:129491200133:web:acd8819aa8693b4e98a1ec",
  measurementId: "G-ZKV341RMKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore Database
export const db = getFirestore(app);