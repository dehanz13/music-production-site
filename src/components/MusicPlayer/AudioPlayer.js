import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Collapse,
  IconButton,
  Paper,
  Avatar,
  Slider,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import StopIcon from "@material-ui/icons/Stop";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";

// import song1 from "../../assets/songs/Drowning.mp3";
// import song2 from "../../assets/songs/Edge.mp3";
// import song3 from "../../assets/songs/Fractures.mp3";
import { songsArr } from "../../context/songs";
// import Playlist from "./Playlist";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    minHeight: "60vh",
    backgroundColor: "grey",
    // backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    // backgroundRepeat: "no-repeat",
    width: "100%",
    margin: "auto",
    padding: 0,
    justifyContent: "center",
    justify: "center",
    alignItems: "center",
    textAlign: "center",
  },
  avatarSize: {
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  avatarPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 30,
  },
  cardPadding: {
    paddingBottom: 300,
    // marginBottom: 100,
    // maxHeight: "100vh",
  },
  root: {
    maxWidth: 345,
    paddingBottom: 20,
    margin: theme.spacing(10),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  playbarContainer: {
    justifyContent: "center",
    justify: "center",
    alignItems: "center",
    textAlign: "center",
  },
  sidebutton: {
    fontSize: 20,
  },
  playbutton: {
    fontSize: 50,
  },
  nextPrevButton: {
    fontSize: 40,
  },
  rootSlider: {
    width: 200,
    margin: "0 auto",
  },
}));

const useMultiAudio = (urls) => {
  const [sources] = useState(
    urls.map(({ title, album, cover, source, artist, genre, group }, i) => {
      // console.log("IN FUNCTION = ", urls[i].source);
      return {
        title,
        genre,
        group,
        album,
        cover,
        source,
        artist,
        audio: new Audio(source),
      };
    })
  );
  const [players, setPlayers] = useState(
    urls.map(({ title, album, cover, source, artist, genre, group }, i) => {
      // console.log("IN FUNCTION 2 = ", title);
      return {
        title,
        genre,
        group,
        album,
        cover,
        source,
        artist,
        playing: false,
      };
    })
  );
  const toggle = (targetIndex) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);
  // console.log("AFTER USE EFFECT = ", players);
  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.addEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);
  return [players, toggle];
};

const Player = ({ player, toggle }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={player.artist}
            aria-label="song title"
            className={classes.avatar}
          ></Avatar>
        }
        action={
          <IconButton aria-label="favorite">
            <FavoriteIcon />
          </IconButton>
        }
        title={player.album}
      />
      <CardMedia
        className={classes.media}
        image={player.cover}
        title={player.title}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {player.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {player.group}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {player.genre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.playbarContainer}>
        <IconButton aria-label="Shuffle Tracks">
          <ShuffleIcon className={classes.sidebutton} />
        </IconButton>
        <IconButton aria-label="Previous Track">
          <SkipPreviousIcon className={classes.nextPrevButton} />
        </IconButton>
        <IconButton aria-label="Play/Pause" onClick={toggle}>
          {player.playing ? (
            <PauseCircleFilledIcon className={classes.playbutton} />
          ) : (
            <PlayCircleFilledIcon className={classes.playbutton} />
          )}
        </IconButton>
        <IconButton aria-label="Next Track">
          <SkipNextIcon className={classes.nextPrevButton} />
        </IconButton>
        <IconButton aria-label="Repeat Track">
          <RepeatIcon className={classes.sidebutton} />
        </IconButton>
      </CardActions>
      <div className={classes.rootSlider}>
        <Grid container spacing={2} className={classes.playbarContainer}>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};
const AudioPlayer = () => {
  const classes = useStyles();
  const songsList = [...songsArr];
  const [players, toggle] = useMultiAudio(songsList);
  // console.log("SONGS = ", songsList[0].artwork);
  return (
    <Box>
      <Container>
        <Card>
          <CardContent>
            <Box pt={6} pb={6}>
              <Typography variant="h4">Check out my music!</Typography>
            </Box>
            <Box>
              {players.map((player, i) => (
                <Player key={i} player={player} toggle={toggle(i)} p={10} />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AudioPlayer;
