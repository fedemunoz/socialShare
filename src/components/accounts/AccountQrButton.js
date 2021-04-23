import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../layout/Icon';
import AccountsContext from '../../context/accounts/accountsContext';
import './accountQrButton.scss';

const AccountQrButton = ({ account }) => {
  const accountsContext = useContext(AccountsContext);
  const history = useHistory();

  const itemClick = () => {
    accountsContext.setShowQr(account);
    history.push('show-qr');
  };

  return (
    <div className="account-qr-button" onClick={itemClick}>
      <Icon icon={account.logo} size="lg" />
    </div>
  );
};

AccountQrButton.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountQrButton;
