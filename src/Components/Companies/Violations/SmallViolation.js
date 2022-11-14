import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

const SmallViolation = ({ vObj, vKey, vData }) => {
  const [smallExpand, setSmallExpand] = useState(false);

  return (
    <Grid
      item
      style={{
        height: "5vh",
        width: "43vw",
        marginBottom: smallExpand ? "7vh" : "auto",
      }}
    >
      <Typography style={{ color: "#101F2D" }} variant={"h6"}>
        {" "}
        <i
          className={smallExpand ? "fa fa-angle-up" : "fa fa-angle-down"}
          style={{ cursor: "pointer" }}
          onClick={() => setSmallExpand(!smallExpand)}
        />
        {"   "}
        {vObj["expanded_name"]}
      </Typography>
      {smallExpand && <Typography>{vObj["violation_description"]}</Typography>}
    </Grid>
  );
};

export default SmallViolation;
