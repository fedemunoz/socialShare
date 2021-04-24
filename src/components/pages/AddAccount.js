import React, { useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import Icon from "../layout/Icon";
import Spinner from "../layout/Spinner";
import "../accounts/accountItems.scss";

const AddAccount = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { loading, availableAccounts, getAvailableAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "Add account", backUrl: "/accounts" });
    if (!availableAccounts.length) getAvailableAccounts();
    // eslint-disable-next-line
  }, []);

  const onClick = () => {
    console.log(123);
  };

  return loading ? (
    <Spinner />
  ) : (
    availableAccounts.map((account) => (
      <div className='account-container'>
        <div className='card' onClick={onClick}>
          <h3>
            <Icon icon={account.logo} size='lg' /> {account.name}
          </h3>
        </div>
      </div>
    ))
  );
};

export default AddAccount;
