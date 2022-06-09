import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk2bp4rMw6rnvDZia3ofZoLm5ZIqTZLrg",
  authDomain: "ecommerce-de-fornari-1.firebaseapp.com",
  projectId: "ecommerce-de-fornari-1",
  storageBucket: "ecommerce-de-fornari-1.appspot.com",
  messagingSenderId: "705821751541",
  appId: "1:705821751541:web:1fdf862ef0d67c63b82dbc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);