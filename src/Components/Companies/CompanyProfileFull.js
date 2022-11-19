import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import NoResults from "./NoResults";
import ViolationsBox from "./Violations/ViolationsBox";
import InfiniteScroll from "react-infinite-scroll-component";
import { violationsDescription } from "./Violations/violationsDescription";

const CompanyProfileFull = ({ profile }) => {
  let [vCount, setVCount] = useState(0);

  useEffect(() => {
    if (profile)
      setVCount(
        profile[1]["violations"]["overall"]["case_violtn_cnt"]["count"],
      );
  }, [profile]);

  return (
    <Box>
      {!profile ? (
        <NoResults />
      ) : (
        <Container style={{ margin: "3vh 1vw" }}>
          <Typography
            style={{ fontSize: "25px" }}
          >{`${profile[1]["cty_nm"]}, ${profile[1]["st_cd"]} | ${profile[1]["naic"]["naics_code_description"]}`}</Typography>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "spaceBetween",
              margin: "10px",
              marginLeft: "0px",
            }}
          >
            <div style={{ marginLeft: "0px" }}>
              <Typography
                sx={{ mb: 1.5 }}
                style={{
                  color: "#101F2D",
                  fontWeight: "700",
                  width: "30vw",
                  fontSize: "30px",
                }}
              >
                {profile[1]["trade_nm"]} &#128308;
              </Typography>
            </div>

            <div style={{ margin: "auto" }}>
              <Typography
                sx={{ mb: 1.5 }}
                style={{ float: "right", fontSize: "30px" }}
              >
                Total Violations:{" "}
                <span style={{ color: "#FF0000" }}>
                  <strong>{vCount}</strong>
                </span>
              </Typography>
            </div>
          </div>

          {/* <InfiniteScroll
            dataLength={violationsDescription.length}
            style={{ maxHeight: "55vh" }}
          >
            {violationsDescription.map((type, idx) => (
              <ViolationsBox type={type} key={idx} profile={profile} />
            ))}
          </InfiniteScroll> */}

          {/* <div style={{ paddingTop: "0px" }}>
            <div
              style={{
                position: "absolute",
                left: "45vw",
                top: "30vh",
                borderRadius: "50%",
                backgroundColor: "#F3FF67",
                display: "inlineBlock",
                height: "40vh",
                width: "23vw",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "68vw",
                top: "35vh",
                position: "absolute",
                borderRadius: "50%",
                backgroundColor: "#5B7DB8",
                display: "inlineBlock",
                height: "31vh",
                width: "18vw",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "61vw",
                top: "63vh",
                position: "absolute",
                borderRadius: "50%",
                backgroundColor: "#FF337C",
                display: "inlineBlock",
                height: "29vh",
                width: "16vw",
              }}
            ></div>
          </div> */}
        </Container>
      )}
    </Box>
  );
};

export default CompanyProfileFull;
