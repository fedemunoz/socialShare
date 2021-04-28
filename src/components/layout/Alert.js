import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import NotificationsContext from "../../context/notifications/notificationsContext";
import Button from "@material-ui/core/Button";
import "./alert.scss";

const Alert = () => {
  const notificationsContext = useContext(NotificationsContext);
  const { modal, hideModal } = notificationsContext;
  const handleClose = () => hideModal();

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
        <div className='modal-component'>
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
