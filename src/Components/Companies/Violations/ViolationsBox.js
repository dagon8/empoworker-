import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import SmallViolation from "./SmallViolation.js";
import "./ViolationsBox.css";

const ViolationsBox = ({ type, key, profile }) => {
  const [expand, setExpand] = useState(false);
  const [vData, setVData] = useState(profile[1]["violations"]);

  useEffect(() => {
    setExpand(false);
  }, []);

  useEffect(() => {
    console.log("profile changed", profile[1]["violations"]);
    setVData(profile[1]["violations"]);
  }, [profile]);

  let title;
  let vType = Object.keys(type)[0];

  switch (vType) {
    case "wage_theft":
      title = "Wage Theft Violations";
      break;
    case "workplace_accident":
      title = "Workplace Accident Violations";
      break;
    case "child_labor":
      title = "Child Labor Violations";
      break;
    default:
      title = "Migrant Violations";
      break;
  }

  const violations = type[vType]["violations"];

  return (
    <Box
      style={{
        backgroundColor: "#18332D",
        boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        width: "45vw",
        height: "55vh",
        margin: "1vh",
        marginBottom: "5vh",
        overflow: "none",
      }}
    >
      <Box
        style={{
          display: "grid",
          direction: "column",
          padding: "0px 0px 0px 4px",
          gap: "8px",
          position: "relative",
          margin: "0 auto",
          marginLeft: "1vw",
          paddingTop: "2vh",
          paddingBottom: "4vh",
        }}
      >
        <Typography style={{ color: "#FF7A40" }} variant={"h5"}>
          <i
            className={expand ? "fa fa-angle-up" : "fa fa-angle-down"}
            style={{ cursor: "pointer" }}
            onClick={() => setExpand(!expand)}
          />{" "}
          {title}
        </Typography>
        {expand && (
          <Typography
            style={{ margin: "0px 0px 0px 0px", color: "white" }}
            variant={"h6"}
          >
            {type[vType]["category_description"]}
          </Typography>
        )}
      </Box>
      <Box
        style={{
          background: "rgba(255, 255, 255, 0.78)",
          width: "43vw",
          height: "34vh",
          borderRadius: "10px",
          margin: "0 auto",
          padding: "10px",
          position: "relative",
        }}
      >
        <Grid container>
          <InfiniteScroll
            dataLength={Object.keys(violations).length}
            style={{ maxHeight: "35vh" }}
          >
            {Object.keys(violations).map((vKey, key) => {
              const vObj = violations[vKey];
              return (
                <SmallViolation
                  vObj={vObj}
                  key={key}
                  vKey={vKey}
                  vData={vData}
                />
              );
            })}
          </InfiniteScroll>
        </Grid>
      </Box>
    </Box>
  );
};

export default ViolationsBox;
