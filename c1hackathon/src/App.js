import logo from './logo.svg';
import './App.css';
import SavingsAccount from './Components/SavingsAccount';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Savings from './Components/Savings';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1>Accounts</h1>
            <SavingsAccount name="decker" />
          </div>
        </Route>

        <Route exact path="/savingsAccount/:id">
          <h1>Routing Works</h1>

        </Route>
      </Switch>
    </Router>


  );
}

export default App;
