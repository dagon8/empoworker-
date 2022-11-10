import React from 'react'
import Dropdown from "./Dropdown.js"
import Quiz from './Quiz.js'
import './Resources.css'

const Resources = () => {
  return (
    <div className='container'>
        <div className="resources-box" style={{backgroundColor: "#18332D",  height: "100vh",  position: "relative", left: "20vh", right: "20vh", top: "20vh"}}>
        {/* <div style={{backgroundColor: "#18332D",  height: "100vh",  position: "absolute", left: "20vh", right: "20vh", top: "20vh"}}> */}
        <h1 style={{color: "white",}}>Resources</h1>
        
        <div className="categories" style={{display: "grid", gridTemplateColumns: "70vh 30vh", gridAutoRows: "50vh 30vh", positive: "relative", left: "15vw", right: "15vw", top: "20vh"}}>
          {/* for the category number  */}
        <Dropdown num={0}/>
        <Dropdown num={1}/>
        <Dropdown num={2}/>
        <Dropdown num={3}/>
        <Dropdown num={4}/>
        </div>
        
        </div>

        <div className='quiz-form'>
          <Quiz></Quiz>
        </div>
    </div>
   
  )
}

export default Resources