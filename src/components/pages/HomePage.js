import React, { useContext, useEffect } from "react";
import PageContext from "../../context/page/pageContext";
import AccountsContext from "../../context/accounts/accountsContext";
import Spinner from "../layout/Spinner";
import NoAccounts from "../accounts/NoAccounts";
import EmailTab from "../pages/tabs/EmailTab";
import MyQrTab from "../pages/tabs/MyQrTab";
import AccountsTab from "../pages/tabs/AccountsTab";
import constants from "../../shared/constants";

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
    case constants.EMAIL_TAB.title:
      return <EmailTab />;
    case constants.MY_QR_TAB.title:
      return <MyQrTab userAccounts={userAccounts} />;
    case constants.ACCOUNTS_TAB.title:
      return <AccountsTab />;
    default:
      return <Spinner />;
  }
};

export default HomePage;