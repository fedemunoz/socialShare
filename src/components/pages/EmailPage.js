import React, { Fragment, useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import SendToEmail from "../accounts/SendToEmail";
import AccountSelector from "../accounts/AccountSelector";
import NoAccounts from "../accounts/NoAccounts";
import ContentDivider from "../layout/ContentDivider";

const EmailPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { userAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "Send by Email" });
    // eslint-disable-next-line
  }, []);

  return userAccounts && !userAccounts.length ? (
    <NoAccounts />
  ) : (
    <Fragment>
      <h3>Select accounts</h3>
      <SendToEmail />
      <ContentDivider />
      <AccountSelector />
    </Fragment>
  );
};

export default EmailPage;
