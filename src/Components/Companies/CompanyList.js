import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import CompanyProfile from "./CompanyProfile";
import CompanyProfileFull from "./CompanyProfileFull.js";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingGif from "../../images/loading.gif";
import Filter from "../../images/filter.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const CompanyList = ({ companies, loading, filter, search, clearFilter }) => {
  const {t, i18n} = useTranslation()

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
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "0px",
          marginBottom: "0px",
          marginTop: "1vh",
        }}
      >
        <div style={{ marginRight: "7vw" }}></div>

        <Box
          style={{
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            margin: ".5vh 2vw 1vh 0vw",
          }}
        >
          <div
            style={{
              backgroundColor: "#F0F0F0",
              margin: "0px",
              textAlign: "center",
              height: "4.75vh",
              borderRadius: "5px",
              outlineColor: "#F0F0F0",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                padding: "0px 5px 5px 5px",
                fontWeight: "700",
              }}
            >
              {t("location")}
            </p>
          </div>
          <TextField
            placeholder={t("insert_location")}
            style={{ width: "25vw" }}
            size='small'
            id='locationInput'
          />
        </Box>

        <Box
          style={{
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            margin: ".5vh 2vw 1vh 0vw",
          }}
        >
          <div
            style={{
              backgroundColor: "#F0F0F0",
              margin: "0px",
              textAlign: "center",
              height: "4.75vh",
              borderRadius: "5px",
              outlineColor: "#F0F0F0",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                padding: "0px 5px 5px 5px",
                fontWeight: "700",
              }}
            >
              {t("violations")}
            </p>
          </div>
          <TextField
            type='number'
            size='small'
            placeholder={t("insert_violation_num")}
            style={{
              width: "18vw",
            }}
            id='numberInput'
          />
        </Box>

        <div>
          <Button
            variant='contained'
            color='warning'
            size='medium'
            style={{
              backgroundColor: "#F0F0F0",
              color: "black",
              margin: "5px 5px 0px 0px",
              fontWeight: "700",
            }}
            sx={{ textTransform: "none" }}
            onClick={filter}
          >
            {" "}
            {t("filter")}{" "}
          </Button>
          <Button
            variant='contained'
            color='warning'
            size='medium'
            style={{
              backgroundColor: "#F0F0F0",
              color: "black",
              margin: "5px 5px 0px 0px",
              fontWeight: "700",
            }}
            sx={{ textTransform: "none" }}
            onClick={clearFilter}
          >
            {" "}
            {t("clear")}{" "}
          </Button>
        </div>
      </Box>
      <Grid
        container
        spacing={2}
        direction='row'
        style={{
          marginTop: "1vh",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={4}
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
                        highlight={profile === company}
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
          xs={6}
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
                top: "45vh",
                left: "60vw",
                height: "20vh",
                width: "10vw",
              }}
            />
          ) : (
            <CompanyProfileFull profile={profile} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyList;
