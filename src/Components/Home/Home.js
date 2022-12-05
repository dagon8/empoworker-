import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button } from "@mui/material";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import empoworker_logo from "../../images/empoworker_logo.png";

export default function Home({ value, setValue, search }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className='home-container'>
      <div className='left'>
        <p className='left-text'>
          {t("home_view")} <br /> {t("home_prevent")}
        </p>

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
              className='search-bar-item'
            />
          </div>

          <div style={{ margin: "0px" }}>
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
      </div>

      <div className='right'>
        <img
          src={empoworker_logo}
          alt='empoworker logo'
          className='empoworker-logo-img'
        />
      </div>
    </div>
  );
}
