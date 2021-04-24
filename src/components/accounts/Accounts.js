import React, { Fragment, useContext } from "react";
import AccountItem from "./AccountItem";
import AccountsContext from "../../context/accounts/accountsContext";
import Spinner from "../layout/Spinner";

const Accounts = () => {
  const accountsContext = useContext(AccountsContext);

  const { loading, userAccounts } = accountsContext;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {userAccounts.map((account) => (
        <AccountItem key={account.id} account={account} />
      ))}
    </Fragment>
  );
};

export default Accounts;
