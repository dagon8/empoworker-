import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <ul style={{listStyleType:"none", margin:"0",padding:"15px",  display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
        <li style={{margin: "auto"}}><Link to="/">Home</Link></li>
        <li style={{margin: "auto"}}><Link to="/resources">Resources</Link></li>
    </ul>

  )
}

export default Navbar