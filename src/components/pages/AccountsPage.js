import React, { Fragment, useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import Accounts from "../accounts/Accounts";
import NoAccounts from "../accounts/NoAccounts";
import AddButton from "../layout/AddButton";

const AccountsPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);

  useEffect(() => {
    pageContext.setPage({ title: "My Accounts" });
    // eslint-disable-next-line
  }, []);

  return !accountsContext.userAccounts.length ? (
    <NoAccounts />
  ) : (
    <Fragment>
      <Accounts />
      <AddButton />
    </Fragment>
  );
};

export default AccountsPage;
