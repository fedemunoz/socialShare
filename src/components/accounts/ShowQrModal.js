import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import AccountsContext from "../../context/accounts/accountsContext";
import Icon from "../layout/Icon";
import "./showQrModal.scss";

const QRCode = require("qrcode.react");

const ShowQrModal = () => {
  const accountsContext = useContext(AccountsContext);
  const { showQrAccount, currentQr } = accountsContext;

  const handleClose = () => showQrAccount(null);

  return (
    <Modal open onClose={handleClose} disableEnforceFocus disableAutoFocus>
      <Fade in>
        <div className='show-qr-container'>
          <h2>
            <Icon icon={currentQr.logo} size='sm' /> {currentQr.title}
          </h2>
          <div className='qr-container'>
            <QRCode value={currentQr.url} />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ShowQrModal;
