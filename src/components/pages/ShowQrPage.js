import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Icon from "../layout/Icon";
import PageContext from "../../context/page/pageContext";
import constants from "../../shared/constants";
import "./showQrPage.scss";

const QRCode = require("qrcode.react");

const ShowQrPage = (props) => {
  const history = useHistory();
  const account = props.location.account;
  const pageContext = useContext(PageContext);

  useEffect(() => {
    if (!account) return history.goBack();
    pageContext.setPage({
      title: constants.SHOW_QR_PAGE.title,
      previousTab: constants.MY_QR_TAB.title,
    });
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
