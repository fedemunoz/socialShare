import React, { Fragment, useContext, useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import Accounts from '../accounts/Accounts';

const AccountsPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setTitle('My Accounts');
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <p>Accounts page</p>
      <Accounts />
    </Fragment>
  )
};

export default AccountsPage;
