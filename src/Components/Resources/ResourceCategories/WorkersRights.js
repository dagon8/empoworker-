import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton} from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';
import { t } from "i18next";
import { useTranslation } from "react-i18next";



const WorkersRights = () => {
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
          {t("resources_wr_title")}
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader">{t("what_wr")}</div>
        <div className="category-des1">
         <Typography sx={{width:"1000px"}}>{t("resources_wr_des")}</Typography>
         </div>
      </div>

      <div className="category-subheader">{t("violation_wr")}</div>
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

    <div className="category-subheader">{t("helpful_links")}</div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.mass.gov/service-details/report-an-accident-file-a-complaint-or-request-assistance" target="_blank" rel="noopener noreferrer">
                  {t("report_wr")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/topics/workers-rights-safety" target="_blank" rel="noopener noreferrer">
                   {t("mass_wr")}
          </a>
        </li>
        
      </ul>
    </div>

    </div>
   
  )};
  
  export default WorkersRights;