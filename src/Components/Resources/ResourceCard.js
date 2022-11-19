import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function ResourceCard({ category }) {
  return (
    <div>
      <Card sx={{ backgroundColor: "#98a2b3", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#d3ced0",
            width: "220px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InventoryIcon />
        </Box>
        <CardContent>
          <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {" "}
            {category.title}
          </Typography>
          <Typography sx={{ typography: "body2", color: "#343741" }}>
            {category.description}
          </Typography>
        </CardContent>
        <IconButton sx={{ color: "#7f39fb" }}>
          {" "}
          <ArrowForwardIosIcon />{" "}
        </IconButton>
      </Card>
    </div>
  );
}
