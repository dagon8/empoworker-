import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';


const WageTheft = () => {
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
          Wage Theft
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> What is Wage Theft?</div>
        <div className="category-des1"> { Descriptions.wage_theft.category_description} </div>
      </div>

      <div className="category-subheader">  Violations under Wage Theft:</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.sca_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.sca_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.fmla_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.fmla_violtn_cnt.violation_description}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.dbra_cl_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.dbra_cl_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.flsa_smw14_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.flsa_smw14_violtn_cnt.violation_description}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.cwhssa_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.cwhssa_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.pca_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.pca_violtn_cnt.violation_description}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.wage_theft.violations.ca_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.wage_theft.violations.ca_violtn_cnt.violation_description}</p>
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
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster/download" target="_blank" rel="noopener noreferrer">
                  Massachusetts Wage & Hour Laws Poster - English
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster-spanish/download" target="_blank" rel="noopener noreferrer">
                  Massachusetts Wage & Hour Laws Poster - Spanish
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster-portuguese/download" target="_blank" rel="noopener noreferrer">
                  Massachusetts Wage & Hour Laws Poster - Portuguese
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
  
  export default WageTheft;