import React from "react";
import TextField from "@mui/material/TextField";
import "./CompanySearch.css";
import empoworker_logo from "../../images/empoworker_logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangBtn from "../LangBtn/LangBtn";

function CompanySearch({ setValue, value, search }) {
  const { t, i18n } = useTranslation();
  return (
    <div className='container'>
      <div className='bar-button-container'>
        <div>
          <img
            style={{ height: "5vh" }}
            src={empoworker_logo}
            alt='empoworker logo'
          />
        </div>

        <div className='button-container'>
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
      </div>
    </div>
  );
}
export default CompanySearch;
