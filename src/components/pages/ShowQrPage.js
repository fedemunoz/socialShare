import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab  } from '@fortawesome/free-brands-svg-icons';
import AccountsContext from '../../context/accounts/accountsContext';
import './show-qr-page.scss';
const QRCode = require('qrcode.react');

const ShowQrPage = () => {
  library.add(fab);
  const accountsContext = useContext(AccountsContext);
  const { logo, title, url } = accountsContext.showQr;

  return (
    <div className="show-qr-container" >
      <h2>
        <FontAwesomeIcon icon={['fab', logo]} /> {title}
      </h2>
      <div class="qr-container">
        <QRCode value={url} />
      </div>
    </div>
  );
};

export default ShowQrPage;
