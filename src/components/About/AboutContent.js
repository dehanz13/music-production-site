import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
} from "@material-ui/core";

import avatar1 from "../../assets/gale.jpg";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  avatarSize: {
    width: theme.spacing(60),
    height: theme.spacing(60),
  },
  content: {
    padding: 50,
  },
  paperImg: {
    minHeight: "35vh",
    backgroundImage: `url(${avatar1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "50%",
    margin: "auto",
  },
}));

const AboutContent = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        className={classes.gridItem}
      >
        {/* <Avatar src={avatar1} className={classes.avatarSize}></Avatar> */}
        <Paper className={classes.paperImg}></Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
        className={classes.content}
      >
        <Typography variant="subtitle1">
          Certified-Platinum Music Producer, Mixer, and Mastering Engineer with
          credits from every major label and over 200 million streams on
          Spotify. I believe music is personal and there is no "one size fits
          all" approach. Instead, I work closely with every artist/producer to
          help translate their vision into polished, competitive, and
          radio-ready songs.
        </Typography>
        <Typography variant="subtitle1">
          My background consists of over 10 years experience, working with every
          type of music act that exists. For years, I worked at a major studio
          in Manhattan as a resident engineer and producer, eventually
          transitioning to work full time in Los Angeles.
        </Typography>
        <Typography variant="subtitle1">
          As a Producer, I specialize in Top-40 Pop, Indie, and Electronic, with
          access to many of the best songwriters and vocalists in the world. As
          a Mixer and Mastering Engineer, I work in a wide variety of genres.
          The right mix will take any song from amateur to professional, and I
          have years of experience doing just that.
        </Typography>
        <Typography variant="subtitle1">
          I'm here to help you, no matter what your skill level! We'll work
          together to make the best possible version of your project and your
          music. When you contact me, I'll give you clear deadlines, pricing,
          and a no-nonsense approach. I'll tell you if I think I'm a good fit
          for the job, and on the rare occasions that I'm not, I will happily
          connect you to someone who is. Contact me through the green button
          above and let's get to work.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutContent;
