import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Globals/Navbar";
import Footer from "./Globals/Footer";

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
