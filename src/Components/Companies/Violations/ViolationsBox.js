import React from "react";
import { Box } from "@mui/material";

const ViolationsBox = () => {
  return (
    <Box
      style={{
        backgroundColor: "#18332D",
        boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        width: "35vw",
        height: "40vh",
      }}
    >
      <Box
        style={{
          background: "rgba(255, 255, 255, 0.78)",
          position: "absolute",
          top: "48vh",
          left: "54vw",
          width: "33vw",
          height: "27vh",
          borderRadius: "10px",
        }}
      >
        InnerBox
      </Box>
    </Box>
  );
};

export default ViolationsBox;
