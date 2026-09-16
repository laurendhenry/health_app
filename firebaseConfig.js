// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-oGuCGClgCkL4jYhFGRiBmD_CbG8BhHY",
  authDomain: "cs-4261-app.firebaseapp.com",
  projectId: "cs-4261-app",
  storageBucket: "cs-4261-app.firebasestorage.app",
  messagingSenderId: "40457268536",
  appId: "1:40457268536:web:6021ddaf0bdf36046be5cd",
  measurementId: "G-H57PTYN7WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "healthapp");

export const SHARED_TEST_GROUP = "cs4261-shared-test";