import React from "react";
import { Box, Typography } from "@mui/material";
import { t } from 'i18next'
import { useTranslation } from "react-i18next";

const NoResults = () => {
  const {t, i18n} = useTranslation()
  return (
    <Box
      style={{
        position: "absolute",
        top: "45vh",
        left: "52vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{t("no_result")}</h2>
      <Typography
        style={{ maxWidth: "30vw", display: "flex", textAlign: "center" }}
      >
        {t("no_result_mess")}
      </Typography>
    </Box>
  );
};

export default NoResults;
