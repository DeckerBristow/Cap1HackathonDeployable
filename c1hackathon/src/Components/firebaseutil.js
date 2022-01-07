import * as firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyCJuFa43Y6y0roJK26I0M-he_x8k1sWa5g",
    authDomain: "poptropica-99ff3.firebaseapp.com",
    projectId: "poptropica-99ff3",
    storageBucket: "poptropica-99ff3.appspot.com",
    messagingSenderId: "474378189484",
    appId: "1:474378189484:web:7b074ad60aad348e193d09",
    measurementId: "G-TQK5SEWGDY"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const addAccount = async (goal, balance, uid) => {
    try {
      await db.collection("accounts").add({
        uid: uid,
        goal,
        balance,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

  }

  const logout = () => {
    auth.signOut();
  };

  export  {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };
