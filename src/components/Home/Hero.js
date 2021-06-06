import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Link as Scroll } from "react-scroll";
import { KeyboardArrowUp } from "@material-ui/icons";

import avatar from "../../images/gale.jpeg";
import BackgroundImage from "../../images/production1.jpg";
import HeroContent from "./HeroContent";
import Youtube from "../Youtube";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
    textDecoration: "none",
  },
  appbar: {
    background: "none",
  },
  colorText: {
    color: "#5ADD3D",
  },
  appbarTitle: {
    flexGrow: "1",
    textDecoration: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  icon: {
    color: "#fff",
    fontSize: "2.5rem",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  navBarTabs: {
    color: "#fff",
    fontSize: "1.5rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#5ADD3D",
  },
  navButtons: {
    color: "#5AFF3D",
    fontWeight: 500,
    fontFamily: "Nunito",
    fontSize: "1.5rem",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    // color: '#5AFF3D',
    color: "#2B7A78",
    fontSize: "4.5rem",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  headerTitle: {
    color: "#2B7A78",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  paperContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    minHeight: "100vh",
    // height: 1356,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0 auto",
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
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
  },
}));

const Hero = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Paper className={classes.heroContainer}>
        <HeroContent />
      </Paper>
      <div>
        <h1></h1>
      </div>
      {/* <Youtube /> */}
    </div>
  );
};

export default Hero;
