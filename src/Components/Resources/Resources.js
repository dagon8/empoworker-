import React from "react";
import Dropdown from "./Dropdown.js";
import Quiz from "./Quiz.js";
import "./Resources.css";
import ResourceCard from "./ResourceCard.js";
import categories from "./ResourceCategories.json";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import QuizTwo from "./QuizTwo.js";
const Resources = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='page-container'>
      <div className='learn-box'>
        <div className='learn-title'>{t("learn_more")}</div>
      </div>
      <div className='resources-box'>
        {/* <div className= "resources-title">{t("resources")}</div> */}
        {/* <div className="description">{t("resources_des")}</div> */}
        <div className='categories'>
          <Grid
            container
            spacing={12}
            columns={16}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            {categories.map((category) => (
              <Grid item key={category.id}>
                <ResourceCard category={category} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className='quiz-title'>Questionnaire </div>
          <div
            className='quiz-section'
            style={{ marginLeft: "0px", textAlign: "center" }}
          >
            <QuizTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
