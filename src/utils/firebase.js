// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZsPi_FZKXF2GqlJsXO7Mjg3-rWjmlLRA",
  authDomain: "netfilxgpt-d4bb9.firebaseapp.com",
  projectId: "netfilxgpt-d4bb9",
  storageBucket: "netfilxgpt-d4bb9.appspot.com",
  messagingSenderId: "889757614583",
  appId: "1:889757614583:web:eeb50448709981e9f8eef2",
  measurementId: "G-4WH62R2ZZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);