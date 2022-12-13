import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';
import { useTranslation } from "react-i18next";



const WageTheft = () => {
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
          {t("resources_wt_title")}
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> {t("what_wt")}</div>
        <div className="category-des1"> {t("resources_wt_des")} </div>
      </div>

      <div className="category-subheader">{t("violation_wt")}</div>
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

    <div className="category-subheader"> {t("helpful_links")} </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://www.mass.gov/how-to/file-a-workplace-complaint" target="_blank" rel="noopener noreferrer">
                    {t("report_wt")} 
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  {t("fl_wt")}
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/guides/pay-and-recordkeeping" target="_blank" rel="noopener noreferrer">
                  {t("mass_wt")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster/download" target="_blank" rel="noopener noreferrer">
                  {t("mass_wt_en")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster-spanish/download" target="_blank" rel="noopener noreferrer">
          {t("mass_wt_sp")}
          </a>
        </li>

        <li> 
          <a href="https://www.mass.gov/doc/massachusetts-wage-hour-laws-poster-portuguese/download" target="_blank" rel="noopener noreferrer">
          {t("mass_wt_pt")}
          </a>
        </li>
        
        <li> 
          <a href="https://www.mass.gov/guides/breaks-and-time-off" target="_blank" rel="noopener noreferrer">
                  {t("breaks_off")}
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default WageTheft;