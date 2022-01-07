import React, { useEffect, useState } from "react";
import "./SavingsAccountStyle.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";

function SavingsAccount(props) {
    const history = useHistory();
    console.log(props.username.length);
    props.loginhandler(props.username);

    return <Link to={"/savingsAccount/"}>
        <div className="savingsAccount" >



            <h1>Account Name (from Firebase)</h1>


            <p>This is a savings account for {props.name}</p>


        </div>
    </Link>

};

export default SavingsAccount;