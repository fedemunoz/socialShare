import React, { Fragment, useContext, useEffect } from 'react';
import PageContext from '../../context/page/pageContext';
import SendToEmail from '../accounts/SendToEmail';
import AccountSelector from '../accounts/AccountSelector';
import ContentDivider from '../layout/ContentDivider';

const EmailPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setPage({ title: 'Send by Email', route: 'email' });
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h3>Select accounts</h3>
      <SendToEmail />
      <ContentDivider />
      <AccountSelector />
    </Fragment>
  )
};

export default EmailPage;
