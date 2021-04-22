import React, { Fragment, useContext, useEffect } from 'react';
import AccountItem from './AccountItem';
import AccountQrButton from './AccountQrButton';
import PageContext from '../../context/page/pageContext';
import AccountsContext from '../../context/accounts/accountsContext';
import Spinner from '../layout/Spinner';
import './accounts.scss';

const Accounts = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  
  const { loading, accounts, getAccounts } = accountsContext;

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line
  }, []);


  return loading ? <Spinner /> : (
    pageContext.route === 'accounts' ?
      <Fragment>
        {accounts.map(account => (
            <AccountItem key={account.id} account={account} />
        ))}
      </Fragment> :
      <div className="qr-button-container">
        {accounts.map(account => (        
          <AccountQrButton key={account.id} account={account} />
        ))}
      </div>
  );
};

export default Accounts;
