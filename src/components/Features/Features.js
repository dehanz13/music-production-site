import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import Postlist from "../postlist";

const useStyles = makeStyles((theme) => ({}));

const Features = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Features PAGE</h1>
      <Postlist />
    </div>
  );
};

export default Features;
