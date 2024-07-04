import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoj8QedWWxrO5q5H5522iro2TlqI3IMhQ",
  authDomain: "chat-a2c23.firebaseapp.com",
  projectId: "chat-a2c23",
  storageBucket: "chat-a2c23.appspot.com",
  messagingSenderId: "1059968509351",
  appId: "1:1059968509351:web:85ba92ceee4a7517b88282"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
