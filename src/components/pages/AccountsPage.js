import React, { Fragment, useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import UserAccountsList from "../accounts/UserAccountsList";
import NoAccounts from "../accounts/NoAccounts";
import AddButton from "../layout/AddButton";

const AccountsPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { userAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "My Accounts" });
    // eslint-disable-next-line
  }, []);

  return userAccounts && !userAccounts.length ? (
    <NoAccounts />
  ) : (
    <Fragment>
      <UserAccountsList />
      <AddButton />
    </Fragment>
  );
};

export default AccountsPage;
