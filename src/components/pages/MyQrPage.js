import React, { Fragment, useContext,useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import AccountsContext from '../../context/accounts/accountsContext';

const MyQrPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);

  useEffect(() => {
    pageContext.setPage({ title: 'My QR', route: 'my-qr' });
    accountsContext.getAccounts();
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <p>MyQR page</p>
    </Fragment>
  )
};

export default MyQrPage;
