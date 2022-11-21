import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import NoResults from "./NoResults";
import Circles from "./Circles/Circles.js";
import { t } from 'i18next'
import { useTranslation } from "react-i18next";

const CompanyProfileFull = ({ profile }) => {
  let [vCount, setVCount] = useState(0);
  const {t, i18n} = useTranslation()

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0px 0px 25px 0px",
              padding: "0px 0px 5px 0px",
              height: "1vh",
            }}
          >
            <Typography
              style={{ fontSize: "20px", width: "50vw" }}
            >{`${profile[1]["cty_nm"]}, ${profile[1]["st_cd"]} | ${profile[1]["naic"]["naics_code_description"]}`}</Typography>
            <p style={{ fontSize: "40px", marginRight: "20px" }}>&#128308;</p>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "spaceBetween",
              margin: "10px",
              marginLeft: "0px",
              marginBottom: "0px",
              paddingBottom: "0px",
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
                  margin: 0,
                  padding: 0,
                }}
              >
                {profile[1]["trade_nm"]}
              </Typography>
            </div>

            <div style={{ margin: "auto" }}>
              <Typography
                sx={{ mb: 1.5 }}
                style={{ float: "right", fontSize: "30px" }}
              >
                {t("total_v")}:{" "}
                <span style={{ color: "#FF0000" }}>
                  <strong>{vCount}</strong>
                </span>
              </Typography>
            </div>
          </div>

          <Circles profile={profile} />
        </Container>
      )}
    </Box>
  );
};

export default CompanyProfileFull;
