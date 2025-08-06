// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrbrjC2RWIOExehSugz6oLl8M6RxptNHg",
  authDomain: "localconnect-da340.firebaseapp.com",
  projectId: "localconnect-da340",
  storageBucket: "localconnect-da340.appspot.com",
  messagingSenderId: "346436042870",
  appId: "1:346436042870:web:8cbacd4a6b6220fa2bdf57"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
