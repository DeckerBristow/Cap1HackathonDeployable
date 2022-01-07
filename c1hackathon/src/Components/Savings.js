import './Savings.css'
import React from 'react'
import Logo from './c1logo.png'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import ReactSvgPieChart from "react-svg-piechart"


const Savings = (props) => {


    console.log(props.username);
    const name = "John Doe" //Will use get request
    const balance = "$200" //will use get request
    const data = [
        { title: "Data 1", value: 10, color: "#AF454A" },
        { title: "Data 2", value: 10, color: "#CE14F7" },
        { title: "New Car $30", value: 30, color: "#3da18d" },
        { title: "Data 4", value: 20, color: "#1459F7" },
        { title: "Data 5", value: 10, color: "#F77E14" },
    ]

    // const [savingsgoal, setSavingsgoal] = useState();
    return (
        <div>
            <div className='header'>
                <h1>Hello  {name}</h1>
                <div className='page'>
                    <img src={Logo} alt="c1" />

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
            </div>
            <h2>Current Balance: {balance}</h2>
            <h3>Savings Goals</h3>

            <h3>        <Link to={"/landingPage/"}>Back</Link>
            </h3>


        </div>

    )
}

export default Savings
