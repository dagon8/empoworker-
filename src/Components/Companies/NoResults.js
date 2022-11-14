import React from "react";
import { Box, Typography } from "@mui/material";

const NoResults = () => {
  return (
    <Box
      style={{
        position: "absolute",
        top: "45vh",
        left: "54vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>No results</h2>
      <Typography
        style={{ maxWidth: "30vw", display: "flex", textAlign: "center" }}
      >
        There are no companies that match your current search.
      </Typography>
    </Box>
  );
};

export default NoResults;
