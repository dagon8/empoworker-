import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { t } from 'i18next'
import { useTranslation } from "react-i18next";

const CompanyProfile = ({ company, switchProfile, highlight }) => {
  let [vCount, setVCount] = useState(0);
  const {t, i18n} = useTranslation()

  useEffect(() => {
    setVCount(company[1]["violations"]["overall"]["case_violtn_cnt"]["count"]);
  }, [company]);

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        margin: "5px 5px",
        background: "#EFFBFF",
        cursor: "pointer",
        boxShadow: `${highlight ? "0 0 70px black" : ""}`,
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
            <Typography
              sx={{ fontSize: 18 }}
              gutterBottom
              style={{ color: "#393434", maxWidth: "350px" }}
            >
              {`${company[1]["naic"]["naics_code_description"]}`}
            </Typography>
          </Box>

          <Typography
            sx={{ fontSize: 18 }}
            gutterBottom
            style={{ color: "#393434", float: "right", margin: "1vh 0vw" }}
          >
            {`${vCount}`} {t("violations")} &#128308;
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
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;
