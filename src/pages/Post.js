import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

import postlist from "../posts.json";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
  },
  title: {
    marginBottom: "20px",
  },
  postCard: {
    fontFamily: "Raleway",
    border: "4px solid lightblue",
    marginBottom: "20px",
    padding: "0 20px",
  },
}));

const Post = (props) => {
  const classes = useStyles();
  // console.log(props.match.params.id);
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No title Given";
      fetchedPost.date = post.date ? post.date : "No date Given";
      fetchedPost.author = post.author ? post.author : "No author Given";
      fetchedPost.content = post.content ? post.content : "No content Given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{fetchedPost.title}</h1>
      <small>
        Published on {fetchedPost.date} by {fetchedPost.author}
      </small>
      <hr />
      <div className={classes.postCard}>
        <ReactMarkdown children={fetchedPost.content} />
      </div>
    </div>
  );
};

export default Post;
