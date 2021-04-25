import React from "react";
import AccountQrButton from "../../accounts/AccountQrButton";
import "./myQrTab.scss";

const MyQrTab = ({ userAccounts }) => {
  return (
    <div className='qr-button-container'>
      {userAccounts.map((account) => (
        <AccountQrButton key={account.id} account={account} />
      ))}
    </div>
  );
};

export default MyQrTab;
