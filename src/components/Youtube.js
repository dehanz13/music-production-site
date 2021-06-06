import React from "react";
import YouTube from "react-youtube";
import {
  IconButton,
  Toolbar,
  Collapse,
  Typography,
  Fab,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// https://youtu.be/titrtoQIU2Y
// https://www.youtube.com/watch?v=titrtoQIU2Y

const useStyles = makeStyles((theme) => ({
  youtubeContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "56.25%",
    overflow: "hidden",
    marginBottom: "50px",

    iframe: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
const Youtube = () => {
  const classes = useStyles();
  const videoOnReady = (event) => {
    event.target.pauseVideo();
  };
  const videoOnPlay = (event) => {
    event.target.playVideoAt(50);
    console.log("EVENT TARGET = ", event.target.getCurrentTime());
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={classes.videoContainer}>
      <YouTube
        videoId="titrtoQIU2Y"
        opts={opts}
        onReady={videoOnReady}
        containerClassName={"youtubeContainer"}
        onPlay={videoOnPlay}
      />
    </div>
  );
};

export default Youtube;
