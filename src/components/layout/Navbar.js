import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PageContext from "../../context/page/pageContext";

const style = {
  boxShadow: "rgb(0 0 0 / 15%) 0px 4px 4px 0px",
  backgroundColor: "#FFFFFF",
};

const Navbar = () => {
  const history = useHistory();
  const pageContext = useContext(PageContext);
  const { title, previousTab } = pageContext;

  return (
    <AppBar position='static' color='default' style={style}>
      <Toolbar>
        {previousTab && (
          <IconButton
            edge='start'
            aria-label='back'
            onClick={() => history.goBack()}
          >
            <ArrowBackIosIcon className='color-dark' />
          </IconButton>
        )}
        <Typography variant='h6' className='full-width'>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
