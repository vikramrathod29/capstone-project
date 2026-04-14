// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-3FODcq_FOxRbp_woW-iioYQnTCuz4ro",
  authDomain: "vikram-ecommerce.firebaseapp.com",
  projectId: "vikram-ecommerce",
  storageBucket: "vikram-ecommerce.firebasestorage.app",
  messagingSenderId: "582435206839",
  appId: "1:582435206839:web:b10786e83e8754649fbf32",
  measurementId: "G-371PQRCZQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);