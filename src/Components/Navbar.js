import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div style={{listStyleType:"none", backgroundColor: "#FFD5CC",  margin: "0px", padding:"15px", height: "50px"}}>
        <div style={{float: "right", margin: "auto",display: "flex", justifyContent: "space-between", width: "500px"}}>
            <div style={{margin: "auto" }}><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></div>
            <div style={{margin: "auto"}}><Link to="/resources" style={{textDecoration: "none", color: "black"}}>Resources</Link></div>
        </div>
    </div>

  )
}

export default Navbar