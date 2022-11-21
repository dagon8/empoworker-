import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";


export default function Home() {
  const navigate = useNavigate();
  const {t, i18n} = useTranslation()

  return (
    <div className='home-container'>
      <div className='left-home'>
        <p className='left-title'>Empoworker</p>
        <p className='left-sub'>
          {t("home_view")} <br /> {t("home_prevent")}
        </p>
      </div>

      <div
        className='right-container'
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/search")}
      >
        <div className='right-home'></div>
        <p
          style={{
            margin: "0px",
            padding: "0px",
            top: "43%",
            left: "10%",
            color: "#101f2d",
          }}
          className='right-title'
        >
          {t("home_start")} <br /> {t("home_company")}
        </p>
      </div>
    </div>
  );
}
