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
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Menu,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // background: '#222',
    margin: 0,
    background: "none",
    fontFamily: "Nunito",
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
    color: "#FEFFFF",
    fontFamily: "Nunito",
    variant: "body2",
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
  { listText: "Home", listPath: "/" },
  { listText: "About", listPath: "/about" },
  { listText: "News", listPath: "/news" },
  { listText: "Lyrics", listPath: "/lyrics" },
  { listText: "Music", listPath: "/music" },
  { listText: "Media", listPath: "/media" },
  { listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <AppBar position="fixed sticky" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Container className={classes.navDisplayFlex}>
            <Link className={classes.appbarTitle} to="/">
              <h1 className={classes.colorText}>Glen Nanlohy</h1>
            </Link>
            <List
              component="nav"
              aria-labelledby="main-navigation"
              className={classes.navDisplayFlex}
            >
              {navbarItems.map((item, i) => (
                <ListItem
                  button
                  key={i}
                  className={classes.colorText}
                  component={Link}
                  to={item.listPath}
                >
                  <ListItemText primary={item.listText} />
                </ListItem>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
