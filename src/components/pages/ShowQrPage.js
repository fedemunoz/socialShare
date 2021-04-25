import React, { useContext, useEffect } from "react";
import Icon from "../layout/Icon";
import PageContext from "../../context/page/pageContext";
import "./showQrPage.scss";

const QRCode = require("qrcode.react");

const ShowQrPage = (props) => {
  const account = props.location.account;
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setPage({ title: "Scan to share", showBackButton: true });
    // eslint-disable-next-line
  }, []);

  return account ? (
    <div className='show-qr-container'>
      <h2>
        <Icon icon={account.logo} size='sm' /> {account.title}
      </h2>
      <div className='qr-container'>
        <QRCode value={account.url} />
      </div>
    </div>
  ) : null;
};

export default ShowQrPage;
