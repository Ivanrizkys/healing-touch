import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA7TCkCF2ylkvycmAUc9nN3vvFXn1orlDU",
    authDomain: "healingtouch-868a7.firebaseapp.com",
    projectId: "healingtouch-868a7",
    storageBucket: "healingtouch-868a7.firebasestorage.app",
    messagingSenderId: "807021373050",
    appId: "1:807021373050:web:7e2178b225efa1afd53dc3",
    measurementId: "G-SP22ET79H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);