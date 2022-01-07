import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCJuFa43Y6y0roJK26I0M-he_x8k1sWa5g",
  authDomain: "poptropica-99ff3.firebaseapp.com",
  projectId: "poptropica-99ff3",
  storageBucket: "poptropica-99ff3.appspot.com",
  messagingSenderId: "474378189484",
  appId: "1:474378189484:web:7b074ad60aad348e193d09",
  measurementId: "G-TQK5SEWGDY"
};
// Initialize Firebase
let app = initializeApp(firebaseConfig);

let firestore = getFirestore(app);

export default firestore;