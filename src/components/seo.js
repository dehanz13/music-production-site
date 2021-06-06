import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const seo = (props) => {
  return <div></div>;
};

seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default seo;
