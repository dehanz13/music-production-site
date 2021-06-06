import React from "react";
import { Container, Grid, Paper, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textTransform: "uppercase",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "blue",
    backgroundColor: "transparent",
  },
  centerItems: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 400,
    display: "flex",
  },
  centerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: {
    color: "#ffffff",
    fontSize: "5rem",
  },
}));

const HeroContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Grid container spacing={2}>
        <Paper className={classes.paper}>TEST</Paper>
      </Grid>
      <Box display="flex" width={500} height={500} bgcolor="lightblue" m="auto">
        <h1>TEST</h1>
      </Box> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Box
            display="flex"
            // width={600}
            // height={200}
            // bgcolor="#000000"
            // m="auto"
          >
            <h1 className={classes.titleText}>Gale Nanlohy</h1>
          </Box>
          {/* <h1 className={classes.titleText}>Gale Nanlohy</h1> */}
          {/* <Card className={classes.centerItems}>
            <h1>TEST 2</h1>
          </Card> */}
        </Grid>
      </Grid>
      {/* <div className={classes.centerBox} m="auto">
        <Card className={classes.centerItems}>
          <h1>TEST 2</h1>
        </Card>
      </div> */}
    </div>
  );
};

export default HeroContent;
