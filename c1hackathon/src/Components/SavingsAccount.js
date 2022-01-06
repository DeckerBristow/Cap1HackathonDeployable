import React, { useEffect, useState } from "react";
import "./SavingsAccountStyle.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"

function SavingsAccount (props){




    return <Link to={"/savingsAccount/"+props.name}>
        <div className="savingsAccount" >
        


        <h1 className = 'h1'>Capital One</h1>
        
        <p>This is a savings account for {props.name}</p>

    </div>
    </Link>

};

export default SavingsAccount;