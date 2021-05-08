import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import AccountsContext from "../../context/accounts/accountsContext";
import Icon from "../layout/Icon";
import styles from "./showQrModal.module.scss";

const QRCode = require("qrcode.react");

const nameStyle = {
  fontSize: "0.8rem",
};

const ShowQrModal = () => {
  const accountsContext = useContext(AccountsContext);
  const { showQrAccount, currentQr } = accountsContext;

  const handleClose = () => showQrAccount(null);

  return (
    <Modal open onClose={handleClose} disableEnforceFocus disableAutoFocus>
      <Fade in>
        <div className={styles.container}>
          <h2 className='color-primary'>
            <Icon type={currentQr.faIcon} icon={currentQr.logo} size='1x' />{" "}
            {currentQr.title}
          </h2>
          <p className='color-gray' style={nameStyle}>
            {currentQr.name}
          </p>
          <div className={styles.qrContainer}>
            <QRCode value={currentQr.url} />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ShowQrModal;
