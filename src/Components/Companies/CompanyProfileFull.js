import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import Circles from "./Circles/Circles.js";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const CompanyProfileFull = ({ profile }) => {
  let [vCount, setVCount] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (profile)
      setVCount(
        profile[1]["violations"]["overall"]["case_violtn_cnt"]["count"],
      );
  }, [profile]);

  return (
    <Box>
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
                textDecoration: "underline solid #FF7032",
              }}
            >
              {profile[1]["trade_nm"]}
            </Typography>{" "}
          </div>

          <div
            style={{
              margin: "auto",
              border: "2px solid #FF7032",
              borderRadius: "20px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              padding: "0px 1vw 0px 1vw",
            }}
          >
            <Typography
              sx={{ mb: 1 }}
              style={{
                float: "right",
                fontSize: "18px",
                fontWeight: "600",
                padding: "5px .5vw 0px .5vw",
              }}
            >
              <span>{vCount} </span>
              {t("total_v")}
            </Typography>
            <div style={{ fontSize: "2.5vh" }}>&#128308;</div>
          </div>
        </div>

        <Circles profile={profile} />
      </Container>
    </Box>
  );
};

export default CompanyProfileFull;
