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
    alignItems: "center",
    alignContent: "center",
    margin: "0 auto",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
    <Grid container className={classes.gridItem}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <YouTube
          videoId="fl2keFYTLKQ"
          opts={opts}
          onReady={videoOnReady}
          containerClassName={"youtubeContainer"}
          onPlay={videoOnPlay}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <YouTube
          videoId="titrtoQIU2Y"
          opts={opts}
          onReady={videoOnReady}
          containerClassName={"youtubeContainer"}
          onPlay={videoOnPlay}
        />
      </Grid>
    </Grid>
    // <div className={classes.videoContainer}>
    // <YouTube
    //   videoId="fl2keFYTLKQ"
    //   opts={opts}
    //   onReady={videoOnReady}
    //   containerClassName={"youtubeContainer"}
    //   onPlay={videoOnPlay}
    // />
    // <YouTube
    //   videoId="titrtoQIU2Y"
    //   opts={opts}
    //   onReady={videoOnReady}
    //   containerClassName={"youtubeContainer"}
    //   onPlay={videoOnPlay}
    // />
    // </div>
  );
};

export default Youtube;
