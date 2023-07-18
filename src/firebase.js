import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAeLcvpj0_D210rMW8lPHlArPhALIhOYz0",
  authDomain: "shichat-93f9a.firebaseapp.com",
  projectId: "shichat-93f9a",
  storageBucket: "shichat-93f9a.appspot.com",
  messagingSenderId: "479316189003",
  appId: "1:479316189003:web:36228ba4dba5368e3a12ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
