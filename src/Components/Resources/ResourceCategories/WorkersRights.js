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
            sx={{alignItems:"flex-start", justifyContent:"flex-start"}}
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
          <h4>{t("sraw_violtn")}</h4>
          <Typography sx={{marginBottom:"55px"}}>{t("sraw_violtn_des")}</Typography>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{t("mspa_violtn")}</h4>
          <p>{t("mspa_violtn_des")}</p>
        </Grid>
        <Grid item xs={6}>
          <h4>{t("h1b_violtn")}</h4>
          <p>{t("h1b_violtn_des")}</p>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>{t("h2a_violtn")}</h4>
          <p>{t("h2a_violtn_des")}</p>
        </Grid>
        {/* <Grid item xs={6}>
          <h4>{t("h1a_violtn")}</h4>
          <Typography sx={{marginBottom:"85px"}}> {t("h1a_violtn_des")}</Typography>
          <h1></h1>
        </Grid> */}
        <Grid item xs={6}>
          <h4>{t("eev_violtn")}</h4>
          <p>{t("eev_violtn_des")}</p>
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