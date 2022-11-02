import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from "../images/logo.png"


const Navbar = () => {
    const [boxL,setBoxL] = useState(false)
    const [boxR,setBoxR] = useState(false)
  return (
    <div style={{listStyleType:"none", backgroundColor: "#FFD5CC",  margin: "0px", padding:"15px", height: "50px", display: "flex", justifyContent: "space-between"}}>
        <div style={{marginBottom: "10px", display: "flex"}}>
            <img src={logo} style={{height: "5vh", width: "2vw", margin: "10px 5px"}} alt="empoworker logo"/>
            <h1 style={{fontFamily: "Arial, Helvetica, sans-serif", color: "#18332D", fontWeight: "bold"}}>Empoworker</h1>
        </div>
        
        <div style={{float: "right", margin: "auto", marginRight: "0px",display: "flex", justifyContent: "space-between", width: "500px"}}>

            <div style={{margin: "auto", padding: "5px", borderRadius: "4px", color: "#1B1C1E", marginTop: "15px",outline: `${boxL ? "1px solid black" : ""}`}} 
            onMouseEnter={() => setBoxL(true)}
            onMouseLeave={() => setBoxL(false)}
            >
                <Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link>
            </div>


            <div style={{margin: "auto", padding: "5px", marginTop: "15px", color: "#1B1C1E", borderRadius: "4px", outline: `${boxR ? "1px solid black" : ""}`}} 
            onMouseEnter={() => setBoxR(true)}
            onMouseLeave={() => setBoxR(false)}
            >
                <Link to="/resources" style={{textDecoration: "none", color: "black"}}>Resources</Link>
            </div>

        </div>

    </div>

  )
}

export default Navbar