import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  iconSize: {
    fontSize: 40,
  },
}));

const Component = () => {
  const classes = useStyles();
  return (
    <Container component="div" maxWidth="sm">
      <Grid container>
        <Grid item xs>
          <FacebookIcon className={classes.iconSize} />
        </Grid>
        <Grid item xs>
          <AppleIcon className={classes.iconSize} />
        </Grid>
        <Grid item xs>
          <InstagramIcon className={classes.iconSize} />
        </Grid>
        <Grid item xs>
          <TwitterIcon className={classes.iconSize} />
        </Grid>
        <Grid item xs>
          <YouTubeIcon className={classes.iconSize} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Component;
