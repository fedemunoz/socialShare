import React, { Fragment, useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone;

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const iconStyle = {
  marginTop: "0.4rem",
  height: "1.4rem",
  padding: "0 0.4rem",
};

const DownloadAppPopover = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [elRef, setElRef] = useState(null);

  const divRef = useRef(null);

  useEffect(() => {
    setElRef(divRef.current);
  }, [divRef]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    isIos() &&
    !isInStandaloneMode() && (
      <Fragment>
        <div aria-describedby='pop' ref={divRef}></div>
        {divRef.current && (
          <Popover
            id='pop'
            open={open}
            onClose={handleClose}
            anchorEl={elRef}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              <b>Install this app for a better experience:</b>
              <br />
              <b>1.</b> Tap
              <img src='./share-icon.svg' alt='share-icon' style={iconStyle} />
              <br />
              <b>2.</b> Select 'Add to homescreen'.
            </Typography>
          </Popover>
        )}
      </Fragment>
    )
  );
};

export default DownloadAppPopover;
