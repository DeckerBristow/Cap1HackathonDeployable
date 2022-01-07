import './Savings.css'
import React, { useState, useEffect } from 'react'
import Logo from './c1logo.png'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import ReactSvgPieChart from "react-svg-piechart"
import { storage, db } from '../firebase';
import { initializeApp } from 'firebase/app';
import firestore from "../firebase"
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

const Savings = (props) => {
    let username = useParams();
    const [name, setName] = useState('')
    const [balance, setBalance] = useState(0);
    const [colors, setColors] = useState(["#AF454A", "#CE14F7", "#3da18d", "#1459F7", "#F77E14"]);
    const [data, setData] = useState([]);
    const dataa = [  //example data
        { title: "Data 1", value: 10, color: "#AF454A" },
        { title: "Data 2", value: 10, color: "#CE14F7" },
        { title: "Data 3", value: 30, color: "#3da18d" },
        { title: "Data 4", value: 20, color: "#1459F7" },
        { title: "Data 5", value: 10, color: "#F77E14" },
    ];

    const [savingsName, setSavingsName] = useState(''); //state for extracting input name
    const [amount, setAmount] = useState('');   //state for extracting input amount
    const [accounts, setAccounts] = useState(props.accounts)



    const nameChangeHandler = (event) => {
        //console.log(event.target.value)
        setSavingsName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        //console.log(event.target.value)
        setAmount(event.target.value)
    }
    //try to use connect to firestorm db
    useEffect(() => {
        let accountBuckets = collection(firestore, "savingsAccounts");
        getDocs(accountBuckets).then(snapshot => {
            //Snapshots is just an array of all the documents in blog posts
            let tempUsers = [];

            snapshot.forEach(document => {
                tempUsers.push(document.data());
            });

            setAccounts(tempUsers);


        });
    }, []);




    accounts.forEach(savings => {
        if (savings.username === username) { //uid needs to be passed from login somehow
            setBalance(savings.balance);
            //setName(savings.name);
            console.log('usr = usr is true')
            //console.log(balance);
        }
    })
    const [tern, setTurned] = useState(true)








    const makeAppear = () => {

        setBalance(accounts[0].balance)
        setName(accounts[0].name);
        setTurned(false)
        for (let i = 0; i < (accounts[0].Goals).length; i++) {
            setData((data) => [...data, { title: accounts[0].Goals[i], value: accounts[0].Buckets[i], color: colors[i] }])

            // console.log(accounts[0].Goals[i])
            // console.log(accounts[0].Buckets[i])
            // console.log(colors[i])
        }
        console.log(data)

    }

    const AddGoal = () => { //takes inputs when button is pressed and sends POST request to firebase
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(savingsName)
        // };
        // fetch('https://fir-api-9a206..firebaseio.com/savingsAccounts/UJHZrO9JKeTtkVf9BJcX.json', requestOptions)
        firestore()
            .collection('users')
            .add({
                name: 'Ada Lovelace',
                password: "30",
                username: 'Ada'
            })
            .then(() => {
                console.log('User added!');
            });




    };
    return (

        <div>
            <div className='firstthingyousee'>
                {tern && <button className='dumb' onClick={makeAppear}>Load Info</button>}
            </div>
            {!tern && <div>
                <div className='header'>
                    <h1 className='hello'>Hello  {name}</h1>
                    <div className='page'>
                        <img src={Logo} alt="c1" />
                    </div>
                </div>
                <h2 className='balance'>Current Balance: {balance}</h2>


                <div className='addgoal'>
                    <label>Goal Name</label>
                    <input className = "inputs" placeholder='Type Goal Name Here' onChange={nameChangeHandler} />
                    <label>Amount</label>
                    <input className = 'inputs' type="text" pattern="[0-9]*" placeholder='Type Amount' onChange={amountChangeHandler} />
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
                                //console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            } else {
                                //console.log("Mouse leave - Index:", i, "Event:", e)
                            }
                        }}
                    />
                </div>


                <h3 className='back'><Link to={"/landingPage/"+username}>Back</Link></h3>
            </div>}
        </div>
    )
}

export default Savings