import React, { useContext, useEffect } from "react";
import Icon from "../layout/Icon";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import "./showQrPage.scss";
const QRCode = require("qrcode.react");

const ShowQrPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { showQr } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "Scan to share", backUrl: "/" });
    // eslint-disable-next-line
  }, []);

  return (
    showQr && (
      <div className='show-qr-container'>
        <h2>
          <Icon icon={showQr.logo} size='sm' /> {showQr.title}
        </h2>
        <div className='qr-container'>
          <QRCode value={showQr.url} />
        </div>
      </div>
    )
  );
};

export default ShowQrPage;
