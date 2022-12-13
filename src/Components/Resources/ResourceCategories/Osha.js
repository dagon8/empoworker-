import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';
import { t } from "i18next";
import { useTranslation } from "react-i18next";



const Osha = () => {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  
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
          {t("resources_osh_title")}
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader">{t("what_os")}</div>
        <div className="category-des1"> 
        <Typography sx={{width:"1000px"}}> {t("resources_osh_des")} </Typography>
        </div>
      </div>

      <div className="category-subheader">{t("violation_os")}</div>
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

    <div className="category-subheader">{t("helpful_links")}</div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.osha.gov/workers/file-complaint" target="_blank" rel="noopener noreferrer">
                    {t("report_os")}
          </a>
        </li>

        <li> 
          <a href="https://www.osha.gov/workers#:~:text=To%20discuss%20a%20health%20and,information%20will%20be%20kept%20confidential." target="_blank" rel="noopener noreferrer">
                    {t("rights_os")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/workplace-safety-and-health-program-wshp" target="_blank" rel="noopener noreferrer">
                  {t("program_os")}
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default Osha;