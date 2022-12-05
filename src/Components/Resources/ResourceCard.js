import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./ResourceCard.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { textAlign } from "@mui/system";


export default function ResourceCard({ category }) {
  const { t, i18n } = useTranslation();

  let transid = category.transid;
  let title = "resources_" + transid + "_title";
  let description = "resources_" + transid + "_des";
  // return (
  //   <div>
  //     <Card
  //       sx={{
  //         backgroundColor: "#ccfcf3",
  //         display: "flex",
  //         width: "1000px",
  //         // height: "136px",
  //         borderBottom:"3px solid #86e7d5",
  //         boxShadow:"none"
  //       }}
  //     >
  //     {/* this was the css for the gray icons in the cards */}
  //     {/* leaving this in case we need it again */}
  //       {/* <Box
  //         sx={{
  //           display: "flex",
  //           flexDirection: "row",
  //           flexWrap: "wrap",
  //           backgroundColor: "#d3ced0",
  //           width: "220px",
  //           height: "136px",
  //           position: "absolute",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <InventoryIcon />
  //       </Box> */}

  //       <div className='card-content'>
  //         <CardContent>
  //           <Typography
  //             sx={{
  //               fontSize: "22px",
  //               fontWeight: "bold",
  //               // marginLeft: "205px",
  //               padding: "16px",
  //               // justifyContent:"flex-start",
  //             }}
  //           >
  //             {t(title)}
  //           </Typography>

  //           {/* this was the css for including the resource descriptions on the card */}
  //           {/* <Typography
  //             sx={{
  //               typography: "body2",
  //               color: "#343741",
  //               // marginLeft: "220px",
  //               paddingLeft:"16px",
  //             }}
  //           >
  //             {t(description)}
  //           </Typography> */}
  //         </CardContent>
  //       </div>

  //       <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
  //         <IconButton
  //           component={Link}
  //           to={category.path}
  //           sx={{ color: "#ff7a40" }}
  //         >
  //           {" "}
  //           <ArrowForwardIosIcon />
  //         </IconButton>
  //       </CardActions>
  //     </Card>
  //   </div>
  // );

  return (
    <div>
    <Box
        component={Link}
        to={category.path}
        sx={{
          display: "flex", 
          border:"4px solid #ccfcf3", 
          borderRadius:"66px", 
          width:"454px", 
          height:"290px",  
          alignItems: "center", 
          justifyContent:"center",
          textDecoration:"none",
          "&:hover": {boxShadow: "10px 10px 10px 0 #ff7032"},
       }}>
      
      <div className='card-content'>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            textAlign:"center",
            flexGrow: "1",
          }}
        >
          {t(title)}
        </Typography>
      </div>
      </Box>
    </div>
  )
}
