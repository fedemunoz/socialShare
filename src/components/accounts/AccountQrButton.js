import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import AccountsContext from "../../context/accounts/accountsContext";
import Icon from "../layout/Icon";
import "./accountQrButton.scss";

const AccountQrButton = ({ account }) => {
  const accountsContext = useContext(AccountsContext);

  const onClick = () => accountsContext.showQrAccount(account);

  return (
    <Button className='account-qr-button' onClick={onClick} disableRipple>
      <Icon type={account.faIcon} icon={account.logo} size='lg' />
    </Button>
  );
};

AccountQrButton.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountQrButton;
