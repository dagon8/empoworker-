import React from "react";
import "./ResourceCategory.css";
import Descriptions from "../ViolationGlossary/violationsDescription.json";
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from "react-router";
import WestIcon from '@mui/icons-material/West';



const MigrantResources = () => {
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
          Immigrant Resources
        </div>
      </div>

      <div className="category-content">
        <div className="category-subheader"> What are Immigrant Resources?</div>
        <div className="category-des1"> 
        <Typography> Once undocumented immigrants' rights are violated, there is legal pathway for undocumented workers. </Typography>
        </div>
      </div>

      <div className="category-subheader">  Definitions:</div>
      <div className="line-div"> </div>
      
      <div className="violations-box-w">
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h4>U Visa</h4>
          <Typography>The U nonimmigrant status (U visa) is set aside for victims of certain crimes who have suffered mental or 
          physical abuse and are helpful to law enforcement or government officials in the investigation or prosecution 
          of criminal activity.</Typography>
          <h1></h1>
        </Grid>
        <Grid item xs={6}>
          <h4>Pro Se</h4>
          <Typography>Pro se legal action is another way to refer to self-representation during a legal claim. To appear pro se before the
           court means to appear without representation from an attorney.</Typography>
        </Grid>
        <Grid item xs={6}>
          <h4>Labor Trafficking</h4>
          <Typography>Labor trafficking is a form of modern-day slavery in which individuals perform labor or services through the use of force, fraud, or coercion.
              Labor trafficking includes situations of debt bondage, forced labor, and involuntary child labor. Labor traffickers use violence, threats, lies, and other
              forms of coercion to force people to work against their will in many industries. </Typography>
          <h1></h1>
        </Grid>
      </Grid>
    </Box>
    </div>

    <div className="category-subheader"> Helpful Links: </div>
    <div className="category-links">
      <ul>
        <li> 
          <a href="https://jatwork.org/" target="_blank" rel="noopener noreferrer">
                    Justice at Work
          </a>
        </li>

        <li> 
          <a href="http://www.mwc-casa.org/" target="_blank" rel="noopener noreferrer">
                    Canasta Solidaria (Solidarity Basket)
          </a>
        </li>
        
        <li> 
          <a href="http://verdeamarelo.org/bwg/" target="_blank" rel="noopener noreferrer">
                    Brazilian Women's Group
          </a>
        </li>
        
        <li> 
          <a href="https://www.ilrc.org/sites/default/files/resources/proseuvisamanual_english.pdf" target="_blank" rel="noopener noreferrer">
                  Getting a U-Visa (Immigrantion help for victims of crime) - English
          </a>
        </li>
        <li> 
          <a href="https://www.ilrc.org/sites/default/files/resources/proseuvisamanual_spanish.pdf" target="_blank" rel="noopener noreferrer">
                  Getting a U-Visa (Immigrantion help for victims of crime) - Spanish
          </a>
        </li>

        <li> 
          <a href="https://cgrs.uchastings.edu/sites/default/files/CGRS%20DV%20Pro%20Se%20Manual_Final_2013.pdf" target="_blank" rel="noopener noreferrer">
                  Pro Se Manual: Asylum, Withholding of Removal, and Convention <br></br>Against Torture Protection for Survivors of Domestic Violence - English
          </a>
        </li>

        <li> 
          <a href="https://www.masslegalservices.org/system/files/library/A%20Guide%20for%20Certifiers%20-%20MGL%20258F%20Certification%20for%20Victims%20of%20Violent%20Crime%20and%20Human%20Trafficking.pdf" target="_blank" rel="noopener noreferrer">
                  Certification for Victims of Violent Crime and Human Trafficking - English
          </a>
        </li>

        <li> 
          <a href="https://www.dhs.gov/immigration-options-victims-crimes" target="_blank" rel="noopener noreferrer">
                  Immigration Options for Victims of Crimes
          </a>
        </li>
      </ul>
    </div>

    </div>
   
  )};
  
  export default MigrantResources;