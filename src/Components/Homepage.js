import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Grid
      container
      spacing={0}
      justify='flex-start'
      direction='row'
      style={{ margin: "5vh 10vw" }}
    >
      <Grid
        item
        xs={5}
        style={{
          background: "#18332D",
          height: "80vh",
          width: "40vw",
          margin: "0",
        }}
      >
        <Box style={{ marginTop: "20vh" }}>
          <Typography
            variant='h2'
            gutterBottom
            style={{
              color: "#F3FF67",
              fontFamily: "Arial",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Empoworker
          </Typography>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant='h4'
              style={{ color: "white", alignText: "center" }}
            >
              View violations
            </Typography>
            <Typography
              gutterBottom
              variant='h4'
              style={{ color: "white", alignText: "center" }}
            >
              Prevent harm
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={5}
        style={{
          height: "80vh",
          width: "40vw",
          margin: "0",
          background: "#BCD2E4",
        }}
      ></Grid>
    </Grid>
  );
};

export default Homepage;
