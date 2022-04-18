// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9IoHZHtm1j5qYEtYvXx14zcga3vZDrx0",
    authDomain: "ultra-tendril-347413.firebaseapp.com",
    projectId: "ultra-tendril-347413",
    storageBucket: "ultra-tendril-347413.appspot.com",
    messagingSenderId: "763014967178",
    appId: "1:763014967178:web:6e16a4d4c87860ad5e2273",
    measurementId: "G-3DTHQXJQSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };