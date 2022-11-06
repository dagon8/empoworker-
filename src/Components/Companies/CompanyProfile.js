import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const CompanyProfile = ({ company, switchProfile }) => {
  let [vCount, setVCount] = useState(0);

  useEffect(() => {
    let count = 0;

    if (company) {
      for (const type in company[1]["violations"]) {
        let val = parseInt(company[1]["violations"][type]["count"]);
        if (!isNaN(val)) {
          count += val;
        }
      }
    }

    setVCount(count);
  }, [company]);

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ margin: "5px 5px", background: "#EFFBFF" }}
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
            style={{ color: "#393434", maxWidth: "400px" }}
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

        <Button
          variant='outlined'
          style={{ float: "right", margin: "5px 0px", color: "#FF0000" }}
          onClick={() => switchProfile(company)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyProfile;
