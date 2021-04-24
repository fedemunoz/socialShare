import React, { useContext, useEffect } from "react";
import Icon from "../layout/Icon";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import "./showQrPage.scss";
const QRCode = require("qrcode.react");

const ShowQrPage = () => {
  const pageContext = useContext(PageContext);
  const { setPage, setBackUrl } = pageContext;
  useEffect(() => {
    setPage({ title: "Scan to share", route: "show-qr" });
    setBackUrl("/");
    // eslint-disable-next-line
  }, []);

  const accountsContext = useContext(AccountsContext);
  const { logo, title, url } = accountsContext.showQr;

  return (
    <div className='show-qr-container'>
      <h2>
        <Icon icon={logo} size='sm' /> {title}
      </h2>
      <div className='qr-container'>
        <QRCode value={url} />
      </div>
    </div>
  );
};

export default ShowQrPage;
