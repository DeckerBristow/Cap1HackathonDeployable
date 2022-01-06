import React, { useEffect, useState } from "react";
import "./SavingsAccountStyle.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"

function SavingsAccount (props){




    return <div className="savingsAccount" >
        {/* <Link to={"/savingsAccount/"+props.name}></Link> */}


        <h1>Capital One</h1>
        <p>This is a savings account for {props.name}</p>

    </div>

};

export default SavingsAccount;