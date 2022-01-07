import React, { useEffect, useState } from "react";
import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { initializeApp } from 'firebase/app';
import firestore from "../firebase"
import { collection, getDocs } from 'firebase/firestore/lite';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const firebaseConfig = {
    apiKey: "AIzaSyCJuFa43Y6y0roJK26I0M-he_x8k1sWa5g",
    authDomain: "poptropica-99ff3.firebaseapp.com",
    projectId: "poptropica-99ff3",
    storageBucket: "poptropica-99ff3.appspot.com",
    messagingSenderId: "474378189484",
    appId: "1:474378189484:web:7b074ad60aad348e193d09",
    measurementId: "G-TQK5SEWGDY"
};


const Login = (props) => {
    const history = useHistory();

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);



    const [users, setUsers] = useState([]);
    const [userID, setUserID] = useState('');
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

    const handleClick = () => {
        users.forEach(element => {
            if (userName === element.username && password === element.password) {

                history.push("/landingPage/"+userName);

            }
        });
        toast('Wrong username or password', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });



    }





    return (
        <div className = 'all'>
        <section className="login ">

            <div className="top-login ">
                <img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" className="icon " />

                <h5>Login</h5>
            </div>


            <section>


                <div className="uName ">

                    <input type="text " placeholder="Enter Capital One Username " id="uName " name="uName "
                        value={userName}
                        onChange={e => setUserName(e.target.value)} />
                </div>
                <br />
                <div className="pWord ">

                    <input type="password " placeholder="Enter Capital One Password " id="pWord " name="pWord "
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <br />
                <div>
                    <button className="button " onClick={handleClick}>Login</button>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                </div>
                <br />

                <br />

                <div className="links">
                    <a href="# "> Forgot Username or Password? </a><br />
                    <a href="# "> Don't have an Account? </a>
                </div>
            </section>
        </section>
        </div>
    )
}

export default Login