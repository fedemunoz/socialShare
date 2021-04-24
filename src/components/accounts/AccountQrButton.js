import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../layout/Icon";
import "./accountQrButton.scss";

const AccountQrButton = ({ account }) => {
  return (
    <Link
      className='account-qr-button'
      to={{
        pathname: "/show-qr",
        account: account,
      }}
    >
      <Icon icon={account.logo} size='lg' />
    </Link>
  );
};

AccountQrButton.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountQrButton;
