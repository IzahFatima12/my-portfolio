import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore'; // Import Firestore and serverTimestamp

const firebaseConfig = {
  apiKey: "AIzaSyCGHkFpJFFmOpT0cxq7N4djfi5_AisEjis",
  authDomain: "newsletter-d6eb9.firebaseapp.com",
  projectId: "newsletter-d6eb9",
  storageBucket: "newsletter-d6eb9.appspot.com",
  messagingSenderId: "941554616763",
  appId: "1:941554616763:web:643e3851765cee18b51c9e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db, serverTimestamp };


