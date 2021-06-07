import React from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { grey, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * ": {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  buttonStyle: {
    // margin: theme.spacing(1),
    textTransform: "uppercase",
    maxWidth: "120px",
    maxHeight: "40px",
    minWidth: "50px",
    minHeight: "30px",
  },
  textStyle: {
    fontWeight: 700,
    color: "#ffffff",
  },
  boxStyle: {
    // display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // textAlign: "center",
    padding: 30,
    // width: "100%",
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
  },
  submit: {
    alignSelf: "stretch",
    // backgroundColor: palette.primary.main,
    color: "#fff",
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    width: "35%",
    "&:hover": {
      backgroundColor: grey[700],
    },
  },
}))(Button);
const Newsletter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.form}>
      <Box
        component="div"
        border={1}
        borderColor="grey.500"
        className={classes.boxStyle}
      >
        <form className={classes.root} noValidate autoComplete="off">
          <p className={classes.textStyle}>
            Join Gale's mailing list for the latest news
          </p>
          <p className={classes.textStyle}>
            Receive exclusive behind-the-scenes content, new music updates, show
            dates, merch & more!
          </p>
          <Grid container>
            <Grid item xs>
              <TextField
                id="outlined-basic"
                // label="Your Email"
                placeholder="Your Email"
                variant="outlined"
                size="small"
                className={classes.textField}
                margin="normal"
                InputProps={
                  {
                    // className: classes.input2,
                    // color: "red",
                  }
                }
                style={{
                  backgroundColor: "white",
                  maxWidth: "250px",
                }}
              />
              <ColorButton
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonStyle}
              >
                Sign Up
              </ColorButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Newsletter;
