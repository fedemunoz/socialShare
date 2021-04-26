import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import NotificationsContext from "../../context/notifications/notificationsContext";
import Button from "@material-ui/core/Button";
import "./alert.scss";

const getModalStyle = () => ({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Alert = () => {
  const notificationsContext = useContext(NotificationsContext);
  const { modal, hideModal } = notificationsContext;
  const handleClose = () => hideModal();

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    modal && (
      <Modal
        open
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        disableEnforceFocus
        disableAutoFocus
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id='simple-modal-title'>{modal.title}</h2>
          <p id='simple-modal-description'>{modal.msg}</p>
          <div className='modal-close-button'>
            <Button variant='contained' onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Alert;
