import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#000000"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs>
              <Newsletter />
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <SocialLinks />
          </Box>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Typography variant="h5">Gale Nanlohy &reg; 2021</Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
