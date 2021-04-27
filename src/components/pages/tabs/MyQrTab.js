import React from "react";
import Fade from "@material-ui/core/Fade";

import AccountQrButton from "../../accounts/AccountQrButton";
import "./myQrTab.scss";

const MyQrTab = ({ userAccounts }) => {
  return (
    <Fade in>
      <div className='qr-button-container'>
        {userAccounts.map((account) => (
          <AccountQrButton key={account.id} account={account} />
        ))}
      </div>
    </Fade>
  );
};

export default MyQrTab;
