import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography } from '@mui/material'


const ChildLabor = () => {
  return (
    <div>
      <div className="category-header">
        <div className="category-title">
          Child Labor
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> What is Child Labor?</div>
        <div className="category-des1"> 
        <Typography sx={{width:"1000px"}}> {Descriptions.child_labor.category_description} </Typography>
        </div>
      </div>

      <div className="category-subheader">  Violations under Child Labor:</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>{Descriptions.child_labor.violations.flsa_cl_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.child_labor.violations.flsa_cl_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
      </Grid>
    </Box>
    </div>

    <div className="category-subheader"> Helpful Links: </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.mass.gov/how-to/file-a-workplace-complaint" target="_blank" rel="noopener noreferrer">
                    Report Wage Theft 
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  Fair Labor Division Multilingual Resources
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  Massachusetts Wage Laws
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/guides/breaks-and-time-off" target="_blank" rel="noopener noreferrer">
                  Breaks and Time Off
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default ChildLabor;