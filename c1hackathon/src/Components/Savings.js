import './Savings.css'
import React, {useState, useEffect} from 'react'
import Logo from './c1logo.png'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import ReactSvgPieChart from "react-svg-piechart"
import firestore from '../firebase'
import { collection, getDocs } from "firebase/firestore/lite"

const Savings = (props) => {
    const name = "John Doe" //Will use get request
    const balance = "$200" //will use get request
    
    const data = [//example data
        {title: "Data 1", value: 10, color: "#AF454A"},
        {title: "Data 2", value: 10, color: "#CE14F7"},
        {title: "Data 3", value: 30, color: "#3da18d"},
        {title: "Data 4", value: 20, color: "#1459F7"},
        {title: "Data 5", value: 10, color: "#F77E14"},
      ]

    const [savingsName, setSavingsName] = useState(''); //state for extracting input name
    const [amount, setAmount] = useState('');   //state for extracting input amount

    const nameChangeHandler = (event) => {
        console.log(event.target.value)
        setSavingsName(event.target.value)
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value)
        setAmount(event.target.value)
    }

    const addGoal = ()=>{ //takes inputs when button is pressed and sends POST request to firebase
        console.log('click')
        const newGoal = {
           name: savingsName,
           amount: amount,
        }
        console.log(newGoal)
        
        //try to use connect to firestorm db
        // useEffect(()=>{
        //     const 
        // },[])
    }
    //console.log(savingsName)
    //console.log(amount);
    return (
        <div>
            <div className = 'header'>
                <h1>Hello  {name}</h1>
                <div className = 'page'>
                    <img src = {Logo} alt = "c1"/>
                </div>
            </div>
        <h2>Current Balance: {balance}</h2>
        <h3>Savings Goals</h3>

                <div className = 'addgoal'>
                    <label>Goal Name</label>
                    <input placeholder = 'Type Goal Name Here' onChange = {nameChangeHandler}/>
                    <label>Amount</label>
                    <input type="text" pattern="[0-9]*" placeholder = 'Type Amount' onChange = {amountChangeHandler}/>
                    <button onClick = {addGoal} >Add Goal</button>
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


        <h3><Link to={"/landingPage/"}>Back</Link></h3>


        </div>

    )
}

export default Savings
