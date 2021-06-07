import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import AudioPlayer from "../MusicPlayer/AudioPlayer";

const useStyles = makeStyles((theme) => ({}));

const Music = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Music PAGE</h1>
      <AudioPlayer />
    </div>
  );
};

export default Music;
