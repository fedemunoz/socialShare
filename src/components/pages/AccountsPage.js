import React, { Fragment, useContext, useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import Accounts from '../accounts/Accounts';
import AddButton from '../../components/layout/AddButton';

const AccountsPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setPage({ title: 'My Accounts', route: 'accounts' });
    // eslint-disable-next-line
  }, []);

  return (<Fragment>
      <Accounts />
      <AddButton />
    </Fragment>
  )
};

export default AccountsPage;
