import React from "react";
import TextField from "@mui/material/TextField";
import "./CompanySearch.css";
import { Button, Box, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangBtn from "../LangBtn/LangBtn";

function CompanySearch({ setValue, value, search }) {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <div className='container'>
        <div className='bar-button-container'>
          <div className='header'>
            <div className='logo'>
              <img src={logo} alt='empoworker logo' />
            </div>
            <p
              className='title'
              style={{ fontSize: "45px", marginRight: "11vw", padding: "0vh" }}
            >
              Empoworker
            </p>
          </div>

          <div className='SearchBar'>
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
              fullWidth
              label={t("search")}
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className='searchButton'>
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

          <div className='nav-button home-button'>
            <Button
              component={Link}
              to='/'
              size='small'
              sx={{ textTransform: "none", color: "black" }}
            >
              {" "}
              {t("home")}{" "}
            </Button>
          </div>

          <div className='nav-button search-button'>
            <Button
              component={Link}
              to='/search'
              size='small'
              sx={{ textTransform: "none", color: "black" }}
            >
              {" "}
              {t("search")}{" "}
            </Button>
          </div>

          <div className='nav-button resources-button'>
            <Button
              component={Link}
              to='/resources'
              size='small'
              sx={{ textTransform: "none", color: "black" }}
            >
              {" "}
              {t("resources")}{" "}
            </Button>
          </div>

          <div className='nav-button contact-button'>
            {/* <Button
              component={Link}
              to='/'
              size='small'
              variant='outlined'
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "black",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              {" "}
              {t("contact")}{" "}
            </Button> */}
            <LangBtn></LangBtn>
          </div>
        </div>
        {/* these are the search results */}
        <div className='searchBack'>
          {/* loop through result and display all the values */}
        </div>
      </div>
    </div>
  );
}
export default CompanySearch;
