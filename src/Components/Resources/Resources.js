import React from 'react'
import Dropdown from "./Dropdown.js"
import Quiz from './Quiz.js'

const Resources = () => {
  return (
    <div>
        <div style={{backgroundColor: "#18332D",  height: "100vh",  position: "absolute", left: "20vh", right: "20vh", top: "20vh"}}>
        <h1 style={{color: "white",}}>Resources</h1>
        
        <div style={{display: "grid", gridTemplateColumns: "70vh 30vh", gridAutoRows: "50vh 30vh",  position: "absolute", left: "15vw", right: "15vw", top: "20vh"}}>
        <Dropdown num={1}/>
        <Dropdown num={2}/>
        <Dropdown num={3}/>
        <Dropdown num={4}/>
        </div>
        
        
        </div>

        <div>
          <Quiz></Quiz>
        </div>
    </div>
   
  )
}

export default Resources