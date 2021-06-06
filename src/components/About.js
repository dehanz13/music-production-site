import React from "react";
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
  Backdrop,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "../images/netherlands.jpg";
import avatar1 from "../images/gale.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  heroContainer: {
    minHeight: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // width: `calc(100vw)`,
    margin: "0 auto",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  titleText: {
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "600",
  },
  avatarImage: {
    backgroundImage: `url(${avatar1})`,
  },
  avatarSize: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  textTitle: {
    color: "#ffffff",
    textTransform: "uppercase",
    paddingTop: 5,
    fontSize: "3rem",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.heroContainer}>
      {/* <Backdrop className={classes.backdrop}>
        
      </Backdrop> */}
      <Grid container className={classes.root} spacing={0}>
        <Grid item>
          <Grid container justify="center" spacing={0}>
            <Grid item>
              <Avatar src={avatar1} className={classes.avatarSize}></Avatar>
            </Grid>
            <Grid item xs={10}>
              <Box
              // display="flex"
              // width="100%"
              // textAlign="center"
              // alignItems="center"
              // m="0"
              >
                <p className={classes.titleText}>
                  Certified-Platinum Music Producer, Mixer, and Mastering
                  Engineer with credits from every major label and over 200
                  million streams on Spotify. I believe music is personal and
                  there is no "one size fits all" approach. Instead, I work
                  closely with every artist/producer to help translate their
                  vision into polished, competitive, and radio-ready songs. My
                  background consists of over 10 years experience, working with
                  every type of music act that exists. For years, I worked at a
                  major studio in Manhattan as a resident engineer and producer,
                  eventually transitioning to work full time in Los Angeles. As
                  a Producer, I specialize in Top-40 Pop, Indie, and Electronic,
                  with access to many of the best songwriters and vocalists in
                  the world. As a Mixer and Mastering Engineer, I work in a wide
                  variety of genres. The right mix will take any song from
                  amateur to professional, and I have years of experience doing
                  just that. I'm here to help you, no matter what your skill
                  level! We'll work together to make the best possible version
                  of your project and your music. When you contact me, I'll give
                  you clear deadlines, pricing, and a no-nonsense approach. I'll
                  tell you if I think I'm a good fit for the job, and on the
                  rare occasions that I'm not, I will happily connect you to
                  someone who is. Contact me through the green button above and
                  let's get to work.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // <div>
    //   <Paper className={classes.heroContainer}>
    //     <h1 className={classes.textTitle}>About Gale</h1>

    //     <Grid
    //       container
    //       spacing={0}
    //       direction="column"
    //       alignItems="center"
    //       justify="center"
    //       style={{ minHeight: "100vh" }}
    //     >
    //       <Grid item>
    //         <Box
    //           display=""
    //         >
    //           <Avatar src={avatar1} className={classes.avatarSize}></Avatar>
    //         </Box>
    //       </Grid>
    // <Grid item xs={3}>
    //   <Box
    //     display="flex"
    //     width="100%"
    //   >
    //     <p className={classes.titleText}>
    //       Certified-Platinum Music Producer, Mixer, and Mastering Engineer
    //       with credits from every major label and over 200 million streams
    //       on Spotify. I believe music is personal and there is no "one
    //       size fits all" approach. Instead, I work closely with every
    //       artist/producer to help translate their vision into polished,
    //       competitive, and radio-ready songs. My background consists of
    //       over 10 years experience, working with every type of music act
    //       that exists. For years, I worked at a major studio in Manhattan
    //       as a resident engineer and producer, eventually transitioning to
    //       work full time in Los Angeles. As a Producer, I specialize in
    //       Top-40 Pop, Indie, and Electronic, with access to many of the
    //       best songwriters and vocalists in the world. As a Mixer and
    //       Mastering Engineer, I work in a wide variety of genres. The
    //       right mix will take any song from amateur to professional, and I
    //       have years of experience doing just that. I'm here to help you,
    //       no matter what your skill level! We'll work together to make the
    //       best possible version of your project and your music. When you
    //       contact me, I'll give you clear deadlines, pricing, and a
    //       no-nonsense approach. I'll tell you if I think I'm a good fit
    //       for the job, and on the rare occasions that I'm not, I will
    //       happily connect you to someone who is. Contact me through the
    //       green button above and let's get to work.
    //     </p>
    //   </Box>
    // </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
  );
};

export default About;
