import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const CompanyProfile = ({ company, switchProfile, highlight }) => {
  let [vCount, setVCount] = useState(0);

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
    >
      <CardContent>
        <Box
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            style={{ color: "#393434", maxWidth: "350px" }}
          >
            {`${company[1]["cty_nm"]}, ${company[1]["st_cd"]} | ${company[1]["naic"]["naics_code_description"]}`}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            style={{ color: "#393434" }}
          >
            {`${vCount}`} Violations &#128308;
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
          style={{ color: "#101F2D", fontWeight: "700" }}
        >
          {`${company[1]["trade_nm"]}`}
        </Typography>

        <Typography sx={{ mb: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;
