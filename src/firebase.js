import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEVcEuJIRSP95jv5Tw5rFhUi9L_ibrcJE",
  authDomain: "ws-tae-bc4c9.firebaseapp.com",
  projectId: "ws-tae-bc4c9",
  storageBucket: "ws-tae-bc4c9.appspot.com",
  messagingSenderId: "851819122361",
  appId: "1:851819122361:web:43cd59d37d990dcba25568",
  measurementId: "G-EW51YJ29XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
