import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  makeStyles,
  Hidden,
  Typography,
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Menu,
} from "@material-ui/icons";

import avatar from "../../assets/gale.jpg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // background: '#222',
    margin: 0,
    background: "none",
    // fontFamily: "Nunito",
    textTransform: "uppercase",
  },
  appbarTitle: {
    flexGrow: "1",
    // display: 'flex',
    textDecoration: "none",
    color: "#FEFFF",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    // color: '#5ADD3D',
    color: "#FFFFFF",
    fontFamily: "Nunito",
    variant: "body2",

    fontWeight: 800,
  },
  navItemText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    variant: "body2",

    fontWeight: 800,
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: theme.spacing(40),
    height: theme.spacing(138),
    background: "#2B7A78",
    // backgroundColor: '#2B7A78',
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#DEF2F1",
  },
  list: {
    width: 250,
  },
}));

const navbarItems = [
  // { listText: "Home", listPath: "/" },
  { listText: "About", listPath: "/about" },
  { listText: "News", listPath: "/news" },
  { listText: "Features", listPath: "/features" },
  { listText: "Events", listPath: "/events" },
  { listText: "Releases", listPath: "/Releases" },
  { listText: "Artists", listPath: "/artists" },
  { listText: "Videos", listPath: "/videos" },
  { listText: "Mixes", listPath: "/mixes" },
  { listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <AppBar position="fixed sticky" className={classes.appbar} elevation={12}>
        <Toolbar className={classes.appbarWrapper}>
          <Link className={classes.appbarTitle} to="/">
            <h1 className={classes.colorText}>GB Productions.</h1>
          </Link>
          {/* <Container className={classes.navDisplayFlex}> */}
          <List
            component="nav"
            aria-labelledby="main-navigation"
            className={classes.navDisplayFlex}
          >
            {navbarItems.map((item, i) => (
              <ListItem
                button
                key={i}
                className={classes.navItemText}
                component={Link}
                to={item.listPath}
              >
                <Typography component="div">
                  <ListItemText
                    primary={item.listText}
                    fontWeight="fontWeightBold"
                    m={1}
                  />
                </Typography>
                {/* <ListItemText primary={item.listText} /> */}
              </ListItem>
            ))}
          </List>
          {/* </Container> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
