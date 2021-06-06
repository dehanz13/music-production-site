import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default layout;
