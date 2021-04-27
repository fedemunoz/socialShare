import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Icon from "../layout/Icon";
import "./accountQrButton.scss";

const AccountQrButton = ({ account }) => {
  const history = useHistory();

  const onClick = () => {
    history.push({
      pathname: "/show-qr",
      account: account,
    });
  };

  return (
    <div className='account-qr-button' onClick={onClick}>
      <Icon icon={account.logo} size='lg' />
    </div>
  );
};

AccountQrButton.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountQrButton;
