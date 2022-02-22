import React, { useState, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TopLayout from "./components/topLayout";
import LeftLayout from "./components/leftLayout";
import MiddleLayout from "./components/middleLayout";
import RightLayout from "./components/rightLayout";
import BottomLayout from "./components/bottomLayout";

import classes from "./styles.module.less";

interface Iparams {}

const Dashboard = (params: Iparams) => {
  useEffect(() => {}, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={classes.inside}>
        <Grid container>
          <TopLayout />
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={3.5}>
            <LeftLayout />
          </Grid>
          <Grid item xs={5}>
            <MiddleLayout />
          </Grid>
          <Grid item xs={3.5}>
            <RightLayout />
          </Grid>
        </Grid>
        <Grid container>
          <BottomLayout />
        </Grid>
      </div>
    </Box>
  );
};

export default Dashboard;
