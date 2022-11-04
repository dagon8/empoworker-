import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";

const CompanyProfileFull = ({ profile }) => {
  let [vCount, setVCount] = useState(0);

  useEffect(() => {
    console.log("the profile: ", profile);
    let count = 0;

    // if (profile) {
    //   for (const type in profile[1]["violations"]) {
    //     let val = parseInt(profile[1]["violations"][type]["count"]);
    //     if (!isNaN(val)) {
    //       count += val;
    //     }
    //   }
    // }

    setVCount(count);
  }, [profile]);

  return (
    <></>
    // <Box>
    //   {profile === null ? (
    //     <p>No results :(</p>
    //   ) : (
    //     <Container style={{ margin: "3vh 1vw" }}>
    //       <Typography>{`${profile[1]["cty_nm"]}, ${profile[1]["st_cd"]} | ${profile[1]["naic"]["naics_code_description"]}`}</Typography>
    //       <Typography
    //         sx={{ mb: 1.5 }}
    //         style={{ color: "#101F2D", fontWeight: "700", margin: "2vh 0" }}
    //       >
    //         {`${profile[1]["trade_nm"]}`} &#128308;
    //       </Typography>
    //       <Typography sx={{ mb: 1.5 }}>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       </Typography>
    //       <Typography sx={{ mb: 1.5 }}>Total Violations: {vCount}</Typography>
    //     </Container>
    //   )}
    // </Box>
  );
};

export default CompanyProfileFull;
