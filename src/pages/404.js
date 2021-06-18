import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>The page you are looking for doesn't exist :(</h1>
    </div>
  );
};

export default NotFoundPage;
