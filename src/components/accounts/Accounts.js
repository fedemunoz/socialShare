import React, { useContext, useEffect } from 'react';
import AccountItem from './AccountItem';
import AccountsContext from '../../context/accounts/accountsContext';

const Accounts = () => {
  const accountsContext = useContext(AccountsContext);

  useEffect(() => {
    accountsContext.getAccounts();
    console.log(accountsContext.accounts)
    // eslint-disable-next-line
  }, []);

  // const { accounts, getAccounts } = accountsContext;

  return (
    <div>
      {accountsContext.accounts.map(account => (
        <AccountItem key={account.id} account={account} />
      ))}
    </div>
  );
};

export default Accounts;
