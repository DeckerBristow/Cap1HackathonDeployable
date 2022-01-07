import React, { useEffect, useState } from "react";
import "./SavingsAccountStyle.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
import Logo from './c1logo.png'
import { initializeApp } from 'firebase/app';
import firestore from "../firebase"
import { collection, getDocs } from 'firebase/firestore/lite';
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

const SavingsAccount =(props) =>{
    const app = initializeApp(firebaseConfig);
    

    let { id } = useParams();

    const history = useHistory();
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        let savingsAccounts = collection(firestore, "savingsAccounts");
        getDocs(savingsAccounts).then(snapshot => {
            //Snapshots is just an array of all the documents in blog posts
            let tempUsers = [];

            snapshot.forEach(document => {
                tempUsers.push(document.data());
            });


             setAccounts(tempUsers);
             props.loginhandler(accounts);

             
        });
    }, []);
    


    // if(props.userName===undefined){
    //     history.push("/");
    //   }

const goToSave = () =>{
    console.log(accounts);

}


    return <Link to={"/savingsAccount/"+ id}>
        
        <div onClick={goToSave} >
        <div className='header'>
                <h1 className='hello'>Hello {props.username}</h1>
                <div className='page'>
                    <img src={Logo} alt="c1" />
                </div>
            </div>
        <div className="savingsAccount" >

            <h1>Account Name (from Firebase)</h1>


            <p>This is a savings account for {props.name}</p>


        </div>
        </div>
    </Link>

};

export default SavingsAccount;