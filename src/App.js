import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Home from "./components";
import About from "./pages/About";
import News from "./components/News/News";
import Features from "./components/Features/Features";
import Events from "./components/Events/Events";
import Releases from "./components/Releases/Releases";
import Mixes from "./components/Mixes/Mixes";
import Artists from "./components/Artists/Artists";
import Music from "./components/Music/Music";
import Videos from "./components/Videos/Videos";
import Contact from "./components/Contact/Contact";
import Layout from "./components/layout";
import Post from "./pages/Post";
import NotFound from "./pages/404";
// import './App.css';
import "./index.css";
import BackgroundImage from "./assets/production1.jpg";

import Postlist from "./components/postlist";

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
            <Route exact path="/features" component={Features} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/mixes" component={Mixes} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/post/:id"
              render={(props) => <Post {...props} />}
            />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </React.Fragment>
  );
}

export default App;
