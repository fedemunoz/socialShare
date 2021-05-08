import React, { Fragment, useContext } from "react";
import Fade from "@material-ui/core/Fade";

import AccountsContext from "../../../context/accounts/accountsContext";
import AccountQrButton from "../../accounts/AccountQrButton";
import ShowQrModal from "../../accounts/ShowQrModal";
import styles from "./myQrTab.module.scss";

const MyQrTab = ({ userAccounts }) => {
  const accountsContext = useContext(AccountsContext);

  return (
    <Fragment>
      <Fade in>
        <div className={styles.container}>
          {userAccounts.map((account) => (
            <AccountQrButton key={account.id} account={account} />
          ))}
        </div>
      </Fade>
      {accountsContext.currentQr && <ShowQrModal />}
    </Fragment>
  );
};

export default MyQrTab;
