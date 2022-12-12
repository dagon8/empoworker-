import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Button, InputAdornment } from "@mui/material";
import CompanyProfile from "./CompanyProfile";
import CompanyProfileFull from "./CompanyProfileFull.js";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingGif from "../../images/loading.gif";
import Filter from "../../images/filter.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import NoResults from "./NoResults.js";

const CompanyList = ({
  companies,
  loading,
  filter,
  search,
  clearFilter,
  value,
  setValue,
  cityVal, 
  setCityVal, 
  citySearch,
}) => {
  const { t, i18n } = useTranslation();

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
          alignItems: "center",
          flexDirection: "row",
          marginBottom: "0px",
          marginTop: "0px",
        }}
      >
        <div className='search-bar-container'>
          <div className='search-bar'>
            <TextField
              id='outlined-basic'
              onChange={(event) => setValue(event.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  search();
                }
              }}
              value={value}
              variant='outlined'
              label={t("search")}
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className='comp-search-bar-item'
            />

            <TextField
              id='outlined-basic'
              onChange={(event) => setCityVal(event.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  search();
                }
              }}
              value={cityVal}
              variant='outlined'
              label={t("search")}
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className='city-search-bar-item'
            />
          </div>

          <div className='button'>
            <Button
              variant='contained'
              color='warning'
              size='medium'
              onClick={() => {
                search();
              }}
              sx={{ textTransform: "none", color: "black" }}
            >
              {" "}
              {t("search")}{" "}
            </Button>
          </div>
        </div>

        <div
          style={{
            width: "70vw",
            display: "flex",
            alignItems: "center",
            marginLeft: "2vw",
            marginTop: "3vh",
          }}
        >
          <p style={{ paddingRight: "1vw" }}>Filter by</p>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              margin: ".5vh .5vw 1vh 0vw",
            }}
          >
            <div
              style={{
                backgroundColor: "#F0F0F0",
                textAlign: "center",
                alignItems: "normal",
                height: "5vh",
                borderRadius: "5px",
                outlineColor: "#F0F0F0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  padding: "0px",
                  margin: "0px",
                  paddingTop: "1.5vh",
                  fontWeight: "700",
                }}
              >
                {t("location")}
              </p>
            </div>
            <TextField
              placeholder={t("insert_location")}
              style={{ width: "10vw" }}
              size='small'
              id='locationInput'
            />
          </Box>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              margin: ".5vh 2vw 1vh 0vw",
            }}
          >
            <div
              style={{
                backgroundColor: "#F0F0F0",
                textAlign: "center",
                alignItems: "normal",
                height: "5vh",
                borderRadius: "5px",
                outlineColor: "#F0F0F0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  padding: "0px",
                  margin: "0px",
                  paddingTop: "1.5vh",
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
                width: "12.1vw",
              }}
              id='numberInput'
            />
          </Box>

          <div style={{ marginRight: "0px" }}>
            <Button
              variant='contained'
              color='warning'
              size='medium'
              style={{
                backgroundColor: "#F0F0F0",
                color: "black",
                margin: "0px 5px 5px 0px",
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
                margin: "0px 5px 5px 0px",
                fontWeight: "700",
              }}
              sx={{ textTransform: "none" }}
              onClick={clearFilter}
            >
              {" "}
              {t("clear")}{" "}
            </Button>
          </div>
        </div>
      </Box>

      {/* DATA */}

      {loading ? (
        <img
          src={LoadingGif}
          alt='loading'
          style={{
            position: "absolute",
            top: "45vh",
            left: "45vw",
            height: "20vh",
            width: "10vw",
          }}
        />
      ) : profile ? (
        <Grid
          container
          spacing={2}
          direction='row'
          style={{
            marginTop: "0vh",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={4}
            style={{
              height: "80vh",
              width: "40vw",
              margin: "0px",
            }}
          >
            <Box>
              <Grid
                container
                spacing={1}
                justify='flex-start'
                direction='column'
              >
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
            }}
          >
            <CompanyProfileFull profile={profile} />
          </Grid>
        </Grid>
      ) : (
        <div style={{ position: "relative" }}>
          <NoResults />
        </div>
      )}
    </Box>
  );
};

export default CompanyList;
