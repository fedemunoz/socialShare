import React, { useContext, useEffect } from "react";
import PageContext from "../../context/page/pageContext";
import AccountsContext from "../../context/accounts/accountsContext";
import Accounts from "../accounts/Accounts";
import NoAccounts from "../accounts/NoAccounts";
import Spinner from "../layout/Spinner";

const MyQrPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);

  useEffect(() => {
    pageContext.setPage({ title: "My QR", route: "my-qr" });
    accountsContext.getAccounts();
    // eslint-disable-next-line
  }, []);

  if (accountsContext.loading) return <Spinner />;

  return !accountsContext.accounts.length ? <NoAccounts /> : <Accounts />;
};

export default MyQrPage;
