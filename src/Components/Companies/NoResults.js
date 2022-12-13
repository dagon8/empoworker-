import React from "react";
import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const NoResults = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box className='no-result'>
      {/* <h2>{t("no_result")}</h2> */}
      {/* {t("no_result_mess")} */}
      <h1 style={{ padding: "25px" }}>{t("no_result")}</h1>
      <p className='no-result-paragraph'>
        {t("no_result_mess")}
      </p>
      <div className='no-result-button'>
        <h3 className='no-result-h4'>Contact Us</h3>
      </div>
    </Box>
  );
};

export default NoResults;
