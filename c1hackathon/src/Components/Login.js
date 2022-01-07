import React, { useEffect, useState } from "react";
import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { initializeApp } from 'firebase/app';
import firestore from "../firebase"
import { collection, getDocs } from 'firebase/firestore/lite';
//import { useNavigate } from 'react-router-dom'



const firebaseConfig = {
  apiKey: "AIzaSyCJuFa43Y6y0roJK26I0M-he_x8k1sWa5g",
  authDomain: "poptropica-99ff3.firebaseapp.com",
  projectId: "poptropica-99ff3",
  storageBucket: "poptropica-99ff3.appspot.com",
  messagingSenderId: "474378189484",
  appId: "1:474378189484:web:7b074ad60aad348e193d09",
  measurementId: "G-TQK5SEWGDY"
};


const Login = () => {
    //let navigate = useNavigate();

    // Initialize Firebase
const app = initializeApp(firebaseConfig);



const [users, setUsers] = useState([]);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

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

//console.log(users[0].name.ref("name"));
users.forEach(element => {if(userName===element.username && password===element.password){
    console.log(element)}
});


   


    return (

        <section className="login ">

            <div className="top-login ">
                <img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" class="icon " />

                <h5>Login</h5>
            </div>


            <section>

                <form action="/action_page.php " className="info ">
                    <div className="uName ">

                        <input type="text " placeholder="Enter Capital One Username " id="uName " name="uName " 
                        value={userName}
                        onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <br />
                    <div className="pWord ">

                        <input type="password " placeholder="Enter Capital One Password " id="pWord " name="pWord "  
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <Link to="/landingPage"><button type="submit " className="button ">Login</button></Link>
                    </div>
                    <br />

                    <br />

                    <div className="links">
                        <a href="# "> Forgot Username or Password? </a><br />
                        <a href="# "> Don't have an Account? </a>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Login