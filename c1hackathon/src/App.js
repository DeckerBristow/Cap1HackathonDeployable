import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import SavingsAccount from './Components/SavingsAccount';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import Savings from './Components/Savings';
import Login from './Components/Login';
import AddSavingsAccount from "./Components/AddSavingsAccount";
import { initializeApp } from 'firebase/app';
import firestore from "./firebase"
import { collection, getDocs } from 'firebase/firestore/lite';


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
const app = initializeApp(firebaseConfig);

function App() {

  const [users, setUsers] = useState([]);
  const [savingsAccounts, setSavingsAccounts] = useState([]);

  useEffect(() => {
    let accountUsers = collection(firestore, "users");
    getDocs(accountUsers).then(snapshot => {
      //Snapshots is just an array of all the documents in blog posts
      let tempUsers = [];

      snapshot.forEach(document => {
        tempUsers.push(document.data());
      });

      setUsers(tempUsers);
    });
  }, []);
  console.log(users[0]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Login />
          </div>
        </Route>
        <Route exact path="/landingPage">

          <div className="App">
            <h1>Accounts</h1>
            <SavingsAccount name="decker" />
            <div className="accountsList">
              {savingsAccounts.map(element => (
                <SavingsAccount name="decker" />
              ))}
            </div>
            <Link className='addAccountButton' to="/addSavingsAccount"><button>Add Savings Account</button></Link>

            <Link to="/"><button>Log Out</button></Link>
          </div>
        </Route>
        <Route exact path="/addSavingsAccount">
          <AddSavingsAccount />

        </Route>

        <Route exact path="/savingsAccount/:id">
          <Savings></Savings>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
