import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-raleway";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    // fontFamily: "Nunito",
    h1: {
      textTransform: "uppercase",
      fontWeight: 800,
    },
    h2: {
      textTransform: "uppercase",
      fontWeight: 800,
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: 800,
    },
    h4: {
      textTransform: "uppercase",
      fontWeight: 800,
    },
    subtitle1: {
      fontWeight: 500,
    },
    body2: {
      // fontFamily: "Nunito",
    },
  },
  // shape: {
  //   borderRadius: 30,
  // },
  spacing: 5,
  overrides: {
    MuiFilledInput: {},
    MuiInputLabel: {},
    MuiTextField: {},
    MuiButton: {
      root: {
        textTransform: "uppercase",
        padding: "10px",
      },
      fullWidth: "200px",
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary",
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: "outlined",
      InputLabelProps: {
        // shrink: true,
      },
      fullWidth: {
        maxWidth: "300px",
      },
    },
    MuiPaper: {
      elevation: 12,
    },
    MuiCard: {
      elevation: 12,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
