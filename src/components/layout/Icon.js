import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab  } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Icon = ({icon, size}) => {
  return <FontAwesomeIcon icon={['fab', icon]}  size={size}/>
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default Icon
