import React, { useContext, useEffect } from "react";
import PageContext from "../../context/page/pageContext";
import AccountsContext from "../../context/accounts/accountsContext";
import AccountQrButton from "../accounts/AccountQrButton";
import NoAccounts from "../accounts/NoAccounts";
import Spinner from "../layout/Spinner";
import "./home.scss";

const Home = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { loading, accounts, getAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "My QR" });
    if (!accounts.length) getAccounts();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return !accounts.length ? (
    <NoAccounts />
  ) : (
    <div className='qr-button-container'>
      {accounts.map((account) => (
        <AccountQrButton key={account.id} account={account} />
      ))}
    </div>
  );
};

export default Home;
