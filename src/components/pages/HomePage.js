import React, { useContext, useEffect } from "react";
import PageContext from "../../context/page/pageContext";
import AccountsContext from "../../context/accounts/accountsContext";
import Spinner from "../layout/Spinner";
import NoAccounts from "../accounts/NoAccounts";
import EmailTab from "../pages/tabs/EmailTab";
import MyQrTab from "../pages/tabs/MyQrTab";
import AccountsTab from "../pages/tabs/AccountsTab";

const HomePage = () => {
  const accountsContext = useContext(AccountsContext);
  const pageContext = useContext(PageContext);
  const { loading, userAccounts, getUserAccounts } = accountsContext;
  const { title, previousTab } = pageContext;

  useEffect(() => {
    if (!userAccounts || !userAccounts.length) getUserAccounts();
    if (previousTab) pageContext.setPage({ title: previousTab });
    // eslint-disable-next-line
  }, []);

  if (loading || !userAccounts) {
    return <Spinner />;
  } else if (!userAccounts.length) {
    return <NoAccounts />;
  }

  switch (title) {
    case "Send by Email":
      return <EmailTab />;
    case "My Accounts":
      return <AccountsTab />;
    default:
      return <MyQrTab userAccounts={userAccounts} />;
  }
};

export default HomePage;
