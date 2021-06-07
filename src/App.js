import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";

import Home from "./components";
import About from "./components/About/About";
import News from "./components/News/News";
import Lyrics from "./components/Lyrics/Lyrics";
import Music from "./components/Music/Music";
import Media from "./components/Media/Media";
import Contact from "./components/Contact/Contact";
import Layout from "./components/layout";
// import './App.css';
import "./index.css";
import BackgroundImage from "./assets/production1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // maxWidth: "100vh",
    // maxWidth: '100vw',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
    // backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: "#000000",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route exact path="/lyrics" component={Lyrics} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </div>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
