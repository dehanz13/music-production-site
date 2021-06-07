import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  FormControl,
  InputLabel,
  Input,
  Card,
  CardContent,
  Paper,
  Avatar,
} from "@material-ui/core";

import AvatarImg from "../assets/gale2.jpeg";
import BackgroundImage from "../assets/production2.jpg";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    // maxWidth: "50%",
    // margin: theme.spacing(4),
    // backgroundColor: "red",
    // background: "red",
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

const Contact = () => {
  const classes = useStyles();
  return (
    <Box classNames={classes.formContainer}>
      <Paper className={classes.paperContainer}>
        <Grid container component="div" justify="center">
          <Grid item xs className={classes.avatarPosition}>
            <Avatar src={AvatarImg} className={classes.avatarSize}></Avatar>
          </Grid>
        </Grid>
        <Container className={classes.cardPadding}>
          <Card>
            <CardContent>
              <Box pt={6} pb={6}>
                <Typography variant="h4">Contact Gale</Typography>
              </Box>
              {/* <FormControl> */}
              <Box paddingBottom={2}>
                <TextField fullWidth placeholder="Your Name" label="Name" />
              </Box>
              <Box paddingBottom={2}>
                <TextField
                  fullWidth
                  placeholder="e.g. john@doe@production.com"
                  label="Email Address"
                />
              </Box>
              <Box paddingBottom={2}>
                <TextField
                  fullWidth
                  placeholder="e.g. Need 5 songs produced"
                  label="What can we help you with?"
                />
              </Box>
              <Box paddingBottom={2}>
                <TextField
                  fullWidth
                  multiline={true}
                  rows={5}
                  placeholder="e.g. I'm looking for a producer to create 3 tracks for me. The songs are written, and I need someone who can produce a full backing track in the style of Taylor Swift's song 'Style'. I will then record the vocals locally and send the vocal tracks back to you to mix with the backing track. I'm attaching an mp3 demo of one of the songs so you can get a sense of the style."
                  label="Tell us more about your project:"
                />
              </Box>
              {/* </FormControl> */}
              <Box paddingBottom={2}>
                <Button variant="contained" color="primary" size="large">
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* <FormControl>
          <InputLabel>First Name</InputLabel>
          
        </FormControl> */}
        </Container>
      </Paper>
    </Box>
  );
};

export default Contact;
