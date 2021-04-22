import React, { useContext,useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import AccountsContext from '../../context/accounts/accountsContext';
import Accounts from '../accounts/Accounts';

const MyQrPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);

  useEffect(() => {
    pageContext.setPage({ title: 'My QR', route: 'my-qr' });
    accountsContext.getAccounts();
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);

  return (<Accounts />)
};

export default MyQrPage;
