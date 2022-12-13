import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';
import { t } from "i18next";
import { useTranslation } from "react-i18next";




const MigrantResources = () => {
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
          {t("resources_mr_title")}
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader">{t("what_mr")}</div>
        <div className="category-des1"> 
        <Typography> {t("resources_mr_des")} </Typography>
        </div>
      </div>

      <div className="category-subheader">{t("terms_mr")}</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>U Visa</h4>
          <Typography>{t("u_visa_mr")}</Typography>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>Pro Se</h4>
          <Typography>{t("pro_mr")}</Typography>
        </Grid>
        <Grid item xs={6}>
          <h4>{t("labtra_title_mr")}</h4>
          <Typography>{t("labtra_mr")}</Typography>
          <h1></h1>
        </Grid>
      </Grid>
    </Box>
    </div>

    <div className="category-subheader">{t("helpful_links")}</div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://jatwork.org/" target="_blank" rel="noopener noreferrer">
                    {t("justice_mr")}
          </a>
        </li>

        <li> 
          <a href="http://www.mwc-casa.org/" target="_blank" rel="noopener noreferrer">
                    {t("sol_mr")}
          </a>
        </li>
        
        <li> 
          <a href="http://verdeamarelo.org/bwg/" target="_blank" rel="noopener noreferrer">
                    {t("braz_mr")}
          </a>
        </li>
        
        <li> 
          <a href="https://www.ilrc.org/sites/default/files/resources/proseuvisamanual_english.pdf" target="_blank" rel="noopener noreferrer">
                  {t("u_visa_en")}
          </a>
        </li>
        <li> 
          <a href="https://www.ilrc.org/sites/default/files/resources/proseuvisamanual_spanish.pdf" target="_blank" rel="noopener noreferrer">
                  {t("u_visa_sp")}
          </a>
        </li>

        <li> 
          <a href="https://cgrs.uchastings.edu/sites/default/files/CGRS%20DV%20Pro%20Se%20Manual_Final_2013.pdf" target="_blank" rel="noopener noreferrer">
                  {t("pro_se")} <br></br>{t("pro_se_en")}
          </a>
        </li>

        <li> 
          <a href="https://www.masslegalservices.org/system/files/library/A%20Guide%20for%20Certifiers%20-%20MGL%20258F%20Certification%20for%20Victims%20of%20Violent%20Crime%20and%20Human%20Trafficking.pdf" target="_blank" rel="noopener noreferrer">
                  {t("cert_en")}
          </a>
        </li>

        <li> 
          <a href="https://www.dhs.gov/immigration-options-victims-crimes" target="_blank" rel="noopener noreferrer">
                  {t("imm_ops")}
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default MigrantResources;