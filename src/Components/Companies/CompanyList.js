import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CompanyProfile from "./CompanyProfile";
import CompanyProfileFull from "./CompanyProfileFull";
import InfiniteScroll from "react-infinite-scroll-component";

const CompanyList = ({ companies }) => {
  let companiesList = companies[0];
  const [profile, setProfile] = useState(() =>
    companiesList.length === 0 ? null : companiesList[0],
  );

  const switchProfile = (option) => {
    setProfile(() => option);
  };

  useEffect(() => {
    setProfile(() => (companiesList.length === 0 ? null : companiesList[0]));
  }, [companiesList]);

  return (
    <Grid
      container
      spacing={2}
      justify='flex-start'
      direction='row'
      style={{ marginTop: "2vh" }}
    >
      <Grid
        item
        xs={6}
        style={{
          background: "#D1E7EE",
          height: "80vh",
          width: "40vw",
          margin: "auto",
        }}
      >
        <Box>
          <Grid container spacing={1} justify='flex-start' direction='column'>
            <div>
              <InfiniteScroll
                dataLength={companiesList.length}
                style={{ maxHeight: "78vh" }}
              >
                {companiesList.map((company, idx) => (
                  <CompanyProfile
                    company={company}
                    switchProfile={switchProfile}
                    key={idx}
                    len={companiesList.length}
                  />
                ))}
              </InfiniteScroll>
            </div>
          </Grid>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        style={{
          height: "80vh",
          width: "40vw",
          margin: "auto",
          background: "#BCD2E4",
        }}
      >
        <CompanyProfileFull profile={profile} />
      </Grid>
    </Grid>
  );
};

export default CompanyList;
