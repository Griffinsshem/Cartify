import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA41iWrlxlSFDPYL_sVVoiRnyZKYlgo4Mw",
  authDomain: "caritfy.firebaseapp.com",
  projectId: "caritfy",
  storageBucket: "caritfy.firebasestorage.app",
  messagingSenderId: "123465424382",
  appId: "1:123465424382:web:7ce887ed82fa0f45c774af",
  measurementId: "G-4TXCFTD4G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
