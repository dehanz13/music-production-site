import React from "react";
import { Link } from "react-router-dom";
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

let input = `# This is Header\n\nAnd this is paragraph`;
const MyParagraph = (props) => (
  <p>This is inside MyParagraph, and the value is {props.children}</p>
);
const renderers = {
  paragraph: (props) => <MyParagraph {...props} />,
};

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ");
  });
  console.log(excerptList);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>All Featured Blogs</h1>
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div key={i} className={classes.postCard}>
              <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <small>
                Published on {post.date} by {post.author}
              </small>
              <hr />
              <ReactMarkdown children={excerptList[i]} escapeHtml={false} />
              {/* <ReactMarkdown source={excerptList[i]} escapeHTML={false} /> */}
              <br />
              <small>
                <Link to={`/post/${post.id}`}>Read more ...</Link>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
