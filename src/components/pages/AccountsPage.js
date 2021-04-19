import React, { useContext, useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import Accounts from '../accounts/Accounts';

const AccountsPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setPage({ title: 'My Accounts', route: 'accounts' });
    // eslint-disable-next-line
  }, []);

  return (
    <Accounts />
  )
};

export default AccountsPage;
