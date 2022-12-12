import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import "./Circles.css";

const Circles = ({ profile }) => {
  const [vals, setVals] = useState({});
  const [ranks, setRanks] = useState([]);
  const [rankClasses, setRankClasses] = useState({});
  const { t, i18n } = useTranslation();
  const [hovDesc, setHovDesc] = useState("");

  useEffect(() => {
    setRanks([]);
    if (profile) {
      setVals({
        child_labor: profile[1]["violations"]["child_labor"]["category_total"],
        workplace_accident:
          profile[1]["violations"]["workplace_accident"]["category_total"],
        wage_theft: profile[1]["violations"]["wage_theft"]["category_total"],
        migrant: profile[1]["violations"]["migrant"]["category_total"],
      });
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      for (let title in vals) {
        ranks.push([title, vals[title]]);
      }
    }
    ranks.sort(function (a, b) {
      return a[1] - b[1];
    });

    setRankClasses({
      child_labor: "",
      workplace_accident: "",
    });
  }, [profile]);

  useEffect(() => {}, [profile]);

  return (
    <div
      style={{
        position: "relative",
        width: "45vw",
        height: "54vh",
        marginTop: "5px",
      }}
      className='container'
    >
      <div
        className='circle'
        id='circle1'
        style={{
          backgroundColor: "#F3FF67",
        }}
        onMouseEnter={() => {
          setHovDesc("wage_theft");
        }}
        onMouseLeave={() => {
          setHovDesc("");
        }}
      >
        {hovDesc === "wage_theft" ? (
          <p className='descText'>{t("resources_wt_des")}</p>
        ) : (
          <>
            <p className='circleText'>{t("resources_wt_title")}</p>
            <p style={{ alignText: "center", fontSize: "30px" }}>
              {profile[1]["violations"]["wage_theft"]["category_total"]}
            </p>
          </>
        )}
      </div>

      <div
        className='circle'
        id='circle2'
        onMouseEnter={() => setHovDesc("migrant")}
        onMouseLeave={() => {
          setHovDesc("");
        }}
      >
        {hovDesc === "migrant" ? (
          <p className='descText'>{t("resources_wr_des")}</p>
        ) : (
          <>
            <p className='circleText'>{t("resources_wr_title")}</p>
            <p style={{ alignText: "center", fontSize: "30px" }}>
              {profile[1]["violations"]["migrant"]["category_total"]}
            </p>
          </>
        )}
      </div>

      <div
        className='circle'
        id='circle3'
        onMouseEnter={() => setHovDesc("workplace_accident")}
        onMouseLeave={() => {
          setHovDesc("");
        }}
      >
        {hovDesc === "workplace_accident" ? (
          <p className='descText'>{t("resources_osh_des")}</p>
        ) : (
          <>
            <p className='circleText'>{t("resources_osh_title")}</p>

            <p style={{ textAlign: "center", fontSize: "30px" }}>
              {profile[1]["violations"]["workplace_accident"]["category_total"]}
            </p>
          </>
        )}
      </div>

      <div
        className='circle'
        id='circle4'
        onMouseEnter={() => setHovDesc("child_labor")}
        onMouseLeave={() => {
          setHovDesc("");
        }}
      >
        {hovDesc === "child_labor" ? (
          <p className='descText'>{t("resources_cl_des")}</p>
        ) : (
          <>
            <p className='circleText'>{t("resources_cl_title")}</p>
            <p style={{ alignText: "center", fontSize: "30px" }}>
              {profile[1]["violations"]["child_labor"]["category_total"]}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Circles;
