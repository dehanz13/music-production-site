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
  Paper,
  Avatar,
} from "@material-ui/core";
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

// import song1 from "../../assets/songs/Drowning.mp3";
// import song2 from "../../assets/songs/Edge.mp3";
// import song3 from "../../assets/songs/Fractures.mp3";
import { songsArr } from "../../context/songs";

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
}));

const songs = [
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_09_-_Homeroad.mp3",
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Interception.mp3",
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3",
];

const useMultiAudio = (urls) => {
  const [sources] = useState(
    urls.map(({ title, source, artwork }, i) => {
      // console.log("IN FUNCTION = ", urls[i].source);
      return {
        title,
        source,
        artwork,
        audio: new Audio(source),
      };
    })
  );
  const [players, setPlayers] = useState(
    urls.map(({ title, source, artwork }, i) => {
      // console.log("IN FUNCTION 2 = ", title);
      return {
        title,
        source,
        artwork,
        playing: false,
      };
    })
  );
  // const [sources] = useState(
  //   urls.map((url) => {
  //     return {
  //       url,
  //       audio: new Audio(url),
  //     };
  //   })
  // );
  // const [players, setPlayers] = useState(
  //   urls.map((url) => {
  //     return {
  //       url,
  //       playing: false,
  //     };
  //   })
  // );
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

const Player = ({ player, toggle }) => (
  <div>
    <p>Stream URL: {player.title}</p>
    <button onClick={toggle}>{player.playing ? "Pause" : "Play"}</button>
  </div>
);
const AudioPlayer = () => {
  const classes = useStyles();
  const urls = [...songs];
  // const urls = [...songsArr];
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
              {/* {players.map((player, i) => (
                <Player key={i} player={player} toggle={toggle(i)} />
              ))} */}
              {players.map((player, i) => (
                // <Typography variant="subtitle1">{player}</Typography>
                <Player key={i} player={player} toggle={toggle(i)} />
              ))}
            </Box>
            <Box>
              {songsList.map(({ title, source, artwork }, i) => (
                <Typography variant="subtitle1">{artwork}</Typography>
                // <Player key={i} />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AudioPlayer;
