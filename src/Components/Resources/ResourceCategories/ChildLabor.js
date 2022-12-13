import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';
import { useTranslation } from "react-i18next";



const ChildLabor = () => {
  const { t, i18n } = useTranslation();
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
          {t("child_labor")}
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> {t("what_cl")}</div>
        <div className="category-des1"> 
        <Typography sx={{width:"1000px"}}> {t("resources_cl_des")} </Typography>
        </div>
      </div>

      <div className="category-subheader">  {t("violation_cl")}</div>
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

    <div className="category-subheader"> {t("helpful_links")} </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.mass.gov/how-to/file-a-workplace-complaint" target="_blank" rel="noopener noreferrer">
                    {t("report_cl")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/info-details/massachusetts-law-about-child-labor" target="_blank" rel="noopener noreferrer">
              {t("mass_cl")}
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/doc/child-labor-laws-poster/download " target="_blank" rel="noopener noreferrer">
          {t("mass_cl_en")}
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/doc/child-labor-laws-poster-spanish/download" target="_blank" rel="noopener noreferrer">
          {t("mass_cl_sp")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/files/documents/2016/08/on/cll-portuguese.pdf" target="_blank" rel="noopener noreferrer">
          {t("mass_cl_pt")}
          </a>
        </li>  
      </ul>
    </div>

    </div>
   
  )};
  
  export default ChildLabor;