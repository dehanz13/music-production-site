import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import song1 from "../../assets/songs/Drowning.mp3";
import song2 from "../../assets/songs/Edge.mp3";
import song3 from "../../assets/songs/Fractures.mp3";

const useStyles = makeStyles((theme) => ({}));

const AudioPlayer = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>AudioPlayer PAGE</h1>
    </div>
  );
};

export default AudioPlayer;
