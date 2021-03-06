import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, fas, far);

const Icon = ({ icon, size, type, classes, styles }) => (
  <FontAwesomeIcon
    icon={[type, icon]}
    size={size}
    className={classes}
    style={styles}
  />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
Icon.defaultProps = {
  type: "fab",
};

export default Icon;
