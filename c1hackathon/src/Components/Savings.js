import './Savings.css'
import React, { useState, useEffect } from 'react'
import Logo from './c1logo.png'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import ReactSvgPieChart from "react-svg-piechart"

import { initializeApp } from 'firebase/app';
import firestore from "../firebase"
import { collection, getDocs } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom'



const firebaseConfig = {
    apiKey: "AIzaSyCJuFa43Y6y0roJK26I0M-he_x8k1sWa5g",
    authDomain: "poptropica-99ff3.firebaseapp.com",
    projectId: "poptropica-99ff3",
    storageBucket: "poptropica-99ff3.appspot.com",
    messagingSenderId: "474378189484",
    appId: "1:474378189484:web:7b074ad60aad348e193d09",
    measurementId: "G-TQK5SEWGDY"
};



const Savings = (props) => {
    const [name, setName] = useState('')
    const [balance, setBalance] = useState('')
    const app = initializeApp(firebaseConfig);

    const data =
        [  //example data
            { title: "Data 1", value: 10, color: "#AF454A" },
            { title: "Data 2", value: 10, color: "#CE14F7" },
            { title: "Data 3", value: 30, color: "#3da18d" },
            { title: "Data 4", value: 20, color: "#1459F7" },
            { title: "Data 5", value: 10, color: "#F77E14" },
        ]

    const [savingsName, setSavingsName] = useState(''); //state for extracting input name
    const [amount, setAmount] = useState('');   //state for extracting input amount
    const [accounts, setAccounts] = useState([])



    const nameChangeHandler = (event) => {
        console.log(event.target.value)
        setSavingsName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value)
        setAmount(event.target.value)
    }
    //try to use connect to firestorm db
    useEffect(() => {
        let accounts = collection(firestore, "savingsAccounts");
        getDocs(accounts).then(snapshot => {
            //Snapshots is just an array of all the documents in blog posts
            let tempAccounts = [];

            snapshot.forEach(document => {
                tempAccounts.push(document.data());
            });
            setAccounts(tempAccounts);//sets state with array of accounts with dictionaries within them
        });
    }, []);

    accounts.forEach(savings => {
        console.log(savings)
        if (savings.username == props.username) { //uid needs to be passed from login somehow
            setBalance(savings.balance);
            setName(savings.name);
        }
    })

    const AddGoal = () => { //takes inputs when button is pressed and sends POST request to firebase
        console.log('click')
        console.log(savingsName + ' variable after button press')
        console.log(amount + ' var after button press')
        let accounts = collection(firestore, "savingsAccounts");
    };

    console.log(savingsName + ' original variable')
    console.log(amount + ' original variable');
    //console.log(accounts[0].Goals);
    return (
        <div>
            <div className='header'>
                <h1 className='hello'>Hello  {name}</h1>
                <div className='page'>
                    <img src={Logo} alt="c1" />
                </div>
            </div>
            <h2 className='balance'>Current Balance: {balance}</h2>
            <h3>Savings Goals</h3>

            <div className='addgoal'>
                <label>Goal Name</label>
                <input placeholder='Type Goal Name Here' onChange={nameChangeHandler} />
                <label>Amount</label>
                <input type="text" pattern="[0-9]*" placeholder='Type Amount' onChange={amountChangeHandler} />
                <button onClick={AddGoal} >Add Goal</button>
            </div>
            <div className="list-container">

                Savings Data
                <ReactSvgPieChart
                    data={data}

                    expandOnHover
                    // If you need custom behavior when sector is hovered (or touched)
                    onSectorHover={(d, i, e) => {
                        if (d) {
                            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                        }
                    }}
                />
            </div>


            <h3 className='back'><Link to={"/landingPage/"}>Back</Link></h3>
        </div>

    )
}

export default Savings
