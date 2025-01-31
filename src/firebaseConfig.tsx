import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXCWp3BVw1Sun67k-7_spk2hML3laMfpw",
    authDomain: "commerce-compass.firebaseapp.com",
    projectId: "commerce-compass",
    storageBucket: "commerce-compass.firebasestorage.app",
    messagingSenderId: "895175227637",
    appId: "1:895175227637:web:5ae77986defd41ced46dbc",
    measurementId: "G-E7V7DNS3Z5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);