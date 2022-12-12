import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';


const Osha = () => {
  let navigate = useNavigate();
  
  return (
    <div>
      <div className="category-header" style={{display:"flex", flexDirection:"row"}}>
        <div className="back-button">
            <IconButton
            sx={{alignItems:"flex-start", justifyContent:"flex-start"}}
            onClick={()=> navigate(-1)}>
            <WestIcon />
            </IconButton>
        </div>
       
        <div className="category-title">
          Occupaton Safety & Health (OSHA)
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> What is OSHA?</div>
        <div className="category-des1"> 
        <Typography sx={{width:"1000px"}}> { Descriptions.workplace_accident.category_description} </Typography>
        </div>
      </div>

      <div className="category-subheader">  Violations under OSHA:</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>{Descriptions.workplace_accident.violations.osha_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.workplace_accident.violations.osha_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.workplace_accident.violations.crew_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.workplace_accident.violations.crew_violtn_cnt.violation_description}</p>
        </Grid>
      </Grid>
    </Box>
    </div>

    <div className="category-subheader"> Helpful Links: </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.osha.gov/workers/file-complaint" target="_blank" rel="noopener noreferrer">
                    Report Safety & Health Violation
          </a>
        </li>

        <li> 
          <a href="https://www.osha.gov/workers#:~:text=To%20discuss%20a%20health%20and,information%20will%20be%20kept%20confidential." target="_blank" rel="noopener noreferrer">
                    OSHA Worker Rights and Protections
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/workplace-safety-and-health-program-wshp" target="_blank" rel="noopener noreferrer">
                  Workplace Safety and Health Program (WSHP)
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default Osha;