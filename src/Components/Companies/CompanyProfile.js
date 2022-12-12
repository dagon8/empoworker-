import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Rating from "./Rating";

const CompanyProfile = ({ company, switchProfile, highlight }) => {
  let [vCount, setVCount] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setVCount(company[1]["violations"]["overall"]["case_violtn_cnt"]["count"]);
  }, [company]);

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        margin: "15px 5px",
        background: "#CCFCF3",
        cursor: "pointer",
        border: `${highlight ? "2px solid #FF7A40" : ""}`,
        filter: `${highlight ? "drop-shadow(0px 0px 8px #FF7A40)" : ""}`,
        transitionProperty: "border, filter",
        transitionTimingFunction: "ease",
        transitionDuration: ".1s",
      }}
      onClick={() => switchProfile(company)}
      className='profile'
    >
      <CardContent>
        <Box
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: 18 }}
              gutterBottom
              style={{ color: "#393434", maxWidth: "350px" }}
            >
              {`${company[1]["cty_nm"]}, ${company[1]["st_cd"]}`}
            </Typography>
          </Box>

          <Typography
            component={"span"}
            sx={{ fontSize: 18 }}
            gutterBottom

            style={{ color: "#393434", float: "right", margin: "0.5vh 0vw", display: 'grid', gridTemplateColumns: '7vw 1vw'}}
          >
            <>
              {`${vCount}`} {t("violations")}
            </>
            <Rating score={company[1]["violations"]["score"]}></Rating>
          </Typography>
        </Box>

        {/* <Typography
         sx={{ fontSize: 14 }}
         style={{ color: "#393434", float: "right" }}
       >
         Total Violations:
       </Typography> */}

        <Typography
          sx={{ mb: 1.5 }}
          style={{ color: "#101F2D", fontWeight: "800", fontSize: "20px" }}
        >
          {`${company[1]["trade_nm"]}`}
        </Typography>
        <Typography
          sx={{ fontSize: 18 }}
          gutterBottom
          style={{ color: "#393434", maxWidth: "350px" }}
        >
          {`${company[1]["naic"]["naics_code_description"]}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;
