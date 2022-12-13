import React from "react";
import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NoResults = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box className='no-result'>
      {/* <h2>{t("no_result")}</h2> */}
      {/* {t("no_result_mess")} */}
      <h1 style={{ padding: "25px" }}>{t("no_result")}</h1>
      <br />
      <p className='no-result-paragraph'>{t("no_result_mess")}</p>

      <p className='no-result-paragraph'>{t("no_result_mess2")}</p>
    </Box>
  );
};

export default NoResults;
