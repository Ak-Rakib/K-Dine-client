// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCedvaBSPjyjWaLH5bALpIfNnvuXzC8-Ks",
  authDomain: "k-dine.firebaseapp.com",
  projectId: "k-dine",
  storageBucket: "k-dine.appspot.com",
  messagingSenderId: "468913047179",
  appId: "1:468913047179:web:e30c2642fb5eee6b4a768e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app