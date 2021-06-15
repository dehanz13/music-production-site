import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import YouTube from "../Youtube";
import BackgroundImage from "../../assets/production4.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#ffffff",
  },
  paperContainer: {
    minHeight: "60vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    margin: "auto",
    padding: 0,
    justifyContent: "center",
    justify: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },
}));

const Media = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paperContainer}></Paper>
      <Typography
        variant="h2"
        component="div"
        justify="center"
        className={classes.title}
      >
        Media
      </Typography>
      <YouTube />
    </div>
  );
};

export default Media;
