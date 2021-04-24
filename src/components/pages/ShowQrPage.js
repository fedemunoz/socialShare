import React, { useContext } from "react";
import Icon from "../layout/Icon";
import AccountsContext from "../../context/accounts/accountsContext";
import "./showQrPage.scss";
const QRCode = require("qrcode.react");

const ShowQrPage = () => {
  const accountsContext = useContext(AccountsContext);
  const { logo, title, url } = accountsContext.showQr;

  return (
    <div className='show-qr-container'>
      <h2>
        <Icon icon={logo} size='md' /> {title}
      </h2>
      <div class='qr-container'>
        <QRCode value={url} />
      </div>
    </div>
  );
};

export default ShowQrPage;
