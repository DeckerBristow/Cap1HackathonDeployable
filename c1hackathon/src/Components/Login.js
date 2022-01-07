import React, { useEffect, useState } from "react";
import './Login.css'
import {auth, db, signInWithEmailAndPassword} from './firebaseutil.js';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
              
        <section className="login ">

        <div className="top-login ">
            <img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" class="icon "/>
            
            <h5>Login</h5>
        </div>

       
        <section>

        <form action="/action_page.php " className="info ">
            <div class="uName ">
                
                <input type="text " placeholder="Enter Capital One Username " id="uName " name="uName " />
            </div>
            <br/>
            <div class="pWord ">
               
                <input type="password " placeholder="Enter Capital One Password " id="pWord " name="pWord "/>
            </div>
            <br/>
            <div>
                <Link to="/landingPage"><button type="submit " class="button " >Login</button></Link>
            </div>
            <br/>
            
            <br/>

            <div class="links">
                <a href="# "> Forgot Username or Password? </a><br/>
                <a href="# "> Don't have an Account? </a>
            </div>
        </form>
        </section>
    </section>
    )
}

export default Login