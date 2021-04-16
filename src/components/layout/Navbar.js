import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PageContext from '../../context/page/pageContext';

const Navbar = () => {
  const pageContext = useContext(PageContext);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" className="full-width">
          { pageContext.title }
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
