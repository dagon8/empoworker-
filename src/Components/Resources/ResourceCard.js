import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./ResourceCard.css";
import { Link } from 'react-router-dom';
import { t } from 'i18next'
import { useTranslation } from "react-i18next";

export default function ResourceCard({ category }) {
  const {t, i18n} = useTranslation()

  let transid = category.transid
  let title = "resources_" + transid + "_title"
  let description = "resources_" + transid + "_des"
  return (
        <div>
           <Card 
           sx={{ backgroundColor: "#bcd2e4",
                 display:"flex", 
                 width:"1000px", 
                 height:"136px"}}>
            
                <Box sx={{display: "flex", 
                        flexDirection:"row", 
                        flexWrap: "wrap", 
                        backgroundColor: "#d3ced0",
                        width: "220px",
                         height:"136px", 
                         position:"absolute", 
                         alignItems:"center", 
                         justifyContent:"center"}}>
                    <InventoryIcon />
                </Box>

               <div className='card-content'>
                    <CardContent>
                        <Typography
                        sx={{
                            fontSize: "22px",
                            fontWeight: "bold",
                            marginLeft: "205px",
                            padding: "16px",
                        }}
                        >
                        {t(title)}
                        </Typography>
                        <Typography
                        sx={{
                            typography: "body2",
                            color: "#343741",
                            marginLeft: "220px",
                        }}
                        >
                        {t(description)}
                        </Typography>
                    </CardContent>
                </div>
                
                <CardActions sx={{display:"flex", justifyContent:"flex-end"}}>
                    <IconButton 
                    component={Link}
                    to={category.path}    
                    sx={{color: "#ff7a40"}} > <ArrowForwardIosIcon/></IconButton>
                </CardActions>
           </Card>
    </div>
  );
}
