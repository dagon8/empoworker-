import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import "./Circles.css";

const Circles = ({ profile }) => {
  const { t, i18n } = useTranslation();
  const [hovDesc, setHovDesc] = useState("");

  return (
    <div
      style={{
        position: "relative",
        width: "45vw",
        height: "54vh",
        marginTop: "5px",
      }}
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
          <p className='descText'>
            Wage theft occurs any time an employer does not pay an employee
            everything the employee is owed by law.
          </p>
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
          <p className='descText'>
            This category represents violations that pertain to migrant workers
            and their employers. The violations below represent the violation of
            acts to protect documented and undocumented immigrants.
          </p>
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
          <p className='descText'>
            An OSHA violation occurs when a company or employee willingly or
            unknowingly ignores potential and real safety hazards.
          </p>
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
          <p className='descText'>
            The child labor laws were enacted to ensure that when young people
            work, the work is safe and does not jeopardize their health,
            well-being or educational opportunities.
          </p>
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
