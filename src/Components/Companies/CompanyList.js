import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CompanyProfile from "./CompanyProfile";
import CompanyProfileFull from "./CompanyProfileFull.js";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingGif from "../../images/loading.gif";

const CompanyList = ({ companies, loading }) => {
  let companiesList = [];
  if (companies.length !== 0) {
    companiesList = companies;
  }

  const [profile, setProfile] = useState(() =>
    companiesList.length === 0 ? null : companiesList[0],
  );

  const switchProfile = (option) => {
    setProfile(() => option);
  };

  useEffect(() => {
    setProfile(() => (!companiesList.length ? null : companiesList[0]));
  }, [companies]);

  useEffect(() => {
    companiesList = [];
  }, []);

  return (
    <Grid
      container
      spacing={2}
      direction='row'
      style={{ marginTop: "2vh", justifyContent: "center" }}
    >
      <Grid
        item
        xs={5}
        style={{
          background: "#D1E7EE",
          height: "80vh",
          width: "40vw",
          margin: "0",
        }}
      >
        <Box>
          <Grid container spacing={1} justify='flex-start' direction='column'>
            <div>
              <InfiniteScroll
                dataLength={companiesList.length}
                style={{ maxHeight: "78vh" }}
              >
                {companiesList.length ? (
                  companiesList.map((company, idx) => (
                    <CompanyProfile
                      company={company}
                      switchProfile={switchProfile}
                      key={idx}
                      len={companiesList.length}
                    />
                  ))
                ) : (
                  <></>
                )}
              </InfiniteScroll>
            </div>
          </Grid>
        </Box>
      </Grid>

      <Grid
        item
        xs={5}
        style={{
          height: "80vh",
          width: "40vw",
          margin: "0",
          background: "#BCD2E4",
        }}
      >
        {loading ? (
          <img
            src={LoadingGif}
            alt='loading'
            style={{
              position: "absolute",
              top: "40vh",
              left: "65vw",
              height: "20vh",
              width: "10vw",
            }}
          />
        ) : (
          <CompanyProfileFull profile={profile} />
        )}
      </Grid>
    </Grid>
  );
};

export default CompanyList;
