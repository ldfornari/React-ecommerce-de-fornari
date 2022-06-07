// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXx_dJMPu-TIAZc6XNMbFP9ZkdjT4a9w",
  authDomain: "ecommerce-de-fornari.firebaseapp.com",
  projectId: "ecommerce-de-fornari",
  storageBucket: "ecommerce-de-fornari.appspot.com",
  messagingSenderId: "43624771582",
  appId: "1:43624771582:web:a33a80226282e780ae1aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);