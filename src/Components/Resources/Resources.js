import React from 'react'
import Dropdown from "./Dropdown.js"
import Quiz from './Quiz.js'
import './Resources.css'
import ResourceCard from './ResourceCard.js'
import categories from "./ResourceCategories.json"
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
const Resources = () => {


  // const categories = ["Wage Theft", "Child Labor", "Work Place Accidents", "Migrant Resources", "Workers' Rights", "Occupational Safety and Health"];
  // const [resources, setResources] = useState([])

  // useEffect(() => {
  //   fetch("./ResourceCategories.json")
  //   .then(res => res.json())
  //   .then(data => setResources(data))
  // }, [])

  return (
    <div className="container">
        <div className="resources-box">
          <div className= "resources-title">Resources</div>
          <div className="description">Learn more about work-related violations and your rights </div>
          <div className="categories">
            <Grid container spacing={3} m={1} display="flex" alignItems="center" flexDirection="column">
              {categories.map((category) =>  (
                <Grid item key={category.id}> 
                  <ResourceCard category={category}/>
                </Grid>
              ))}
            </Grid>
          <div className="quiz-title">Quiz</div>
          </div>
            
        {/* <div className="categories"> */}
          {/* for the category number  */}
        {/* <Dropdown num={0}/>
        <Dropdown num={1}/>
        <Dropdown num={2}/>
        <Dropdown num={3}/>
        <Dropdown num={4}/>
        </div> */}
        <Quiz/>
        </div>

        {/* <div className='quiz-form'>
          <Quiz></Quiz>
        </div> */}
    </div>
   
  )
}

export default Resources