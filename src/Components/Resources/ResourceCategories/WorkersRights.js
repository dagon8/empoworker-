import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton} from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';


const WorkersRights = () => {
  let navigate = useNavigate();
  
  return (
    <div>
      <div className="category-header" style={{display:"flex", flexDirection:"row"}}>
        <div className="back-button">
            <IconButton
            sx={{alignItems:"flex-start", justifyContent:"flex-start", color:"black"}}
            onClick={()=> navigate(-1)}>
            <WestIcon />
            </IconButton>
        </div>
       
        <div className="category-title">
          Workers' Rights
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> What are Workers' Rights?</div>
        <div className="category-des1">
         <Typography sx={{width:"1000px"}}>{ Descriptions.migrant.category_description} </Typography>
         </div>
      </div>

      <div className="category-subheader">  Violations under Workers' Rights:</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.sraw_violtn_cnt.expanded_name}</h4>
          <Typography sx={{marginBottom:"55px"}}>{Descriptions.migrant.violations.sraw_violtn_cnt.violation_description}</Typography>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.mspa_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.migrant.violations.mspa_violtn_cnt.violation_description}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.h1b_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.migrant.violations.h1b_violtn_cnt.violation_description}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.h2a_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.migrant.violations.h2a_violtn_cnt.violation_description}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.h1a_violtn_cnt.expanded_name}</h4>
          <Typography sx={{marginBottom:"85px"}}> {Descriptions.migrant.violations.h1a_violtn_cnt.violation_description}</Typography>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{Descriptions.migrant.violations.eev_violtn_cnt.expanded_name}</h4>
          <p>{Descriptions.migrant.violations.eev_violtn_cnt.violation_description}</p>
        </Grid>
      </Grid>
    </Box>
    </div>

    <div className="category-subheader"> Helpful Links: </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.mass.gov/service-details/report-an-accident-file-a-complaint-or-request-assistance" target="_blank" rel="noopener noreferrer">
                  Report an accident, file a complaint, or request assistance 
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/topics/workers-rights-safety" target="_blank" rel="noopener noreferrer">
                   Massachusetts Workers' Rights & Safety
          </a>
        </li>
        
      </ul>
    </div>

    </div>
   
  )};
  
  export default WorkersRights;