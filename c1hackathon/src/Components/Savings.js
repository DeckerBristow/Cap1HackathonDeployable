import './Savings.css'
import React from 'react'
import Logo from './c1logo.png'

const Savings = () => {
    const name = "John Doe" //Will use get request
    const balance = "$200" //will use get request
    
    // const [savingsgoal, setSavingsgoal] = useState();
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
        </div>
    )
}

export default Savings
