import React, { useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import Spinner from "../layout/Spinner";
import AccountCategory from "../accounts/AccountCategory";

const AddAccount = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { loading, availableAccounts, getAvailableAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({ title: "Add account", backUrl: "/accounts" });
    if (!availableAccounts.length) getAvailableAccounts();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    availableAccounts.map((accountCategory) => (
      <AccountCategory
        key={accountCategory.name}
        accountCategory={accountCategory}
      />
    ))
  );
};

export default AddAccount;
