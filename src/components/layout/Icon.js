import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, fas);

const Icon = ({ icon, size, type }) => {
  return <FontAwesomeIcon icon={[type, icon]} size={size} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
Icon.defaultProps = {
  type: "fab",
};

export default Icon;
