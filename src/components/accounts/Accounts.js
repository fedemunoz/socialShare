import React, { Fragment, useContext, useEffect } from 'react';
import AccountItem from './AccountItem';
import AccountsContext from '../../context/accounts/accountsContext';
import Spinner from '../layout/Spinner';

const Accounts = () => {
  const accountsContext = useContext(AccountsContext);
  
  const { loading, accounts, getAccounts } = accountsContext;

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line
  }, []);


  return loading ? <Spinner /> : (
    <Fragment>
      {accounts.map(account => (
        <AccountItem key={account.id} account={account} />
      ))}
    </Fragment>
  );
};

export default Accounts;
