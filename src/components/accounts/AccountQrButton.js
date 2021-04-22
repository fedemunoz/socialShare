import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab  } from '@fortawesome/free-brands-svg-icons';
import AccountsContext from '../../context/accounts/accountsContext';
import './accountQrButton.scss';

const AccountQrButton = ({ account }) => {
  library.add(fab);
  const accountsContext = useContext(AccountsContext);
  const history = useHistory();

  const itemClick = () => {
    accountsContext.setShowQr(account);
    history.push('show-qr');
  };

  return (
    <div className="account-qr-button" >
      <FontAwesomeIcon 
        icon={['fab', account.logo]} 
        size="lg"         
        onClick={itemClick} 
      />
    </div>
  );
};

AccountQrButton.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountQrButton;
