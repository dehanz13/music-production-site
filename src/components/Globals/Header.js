import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Gale Bertrand Productions</h1>
    </div>
  );
};

export default Header;
