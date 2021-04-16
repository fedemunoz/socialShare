import React, { Fragment, useContext, useEffect } from 'react';
import PageContext from '../../context/page/pageContext';

const EmailPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setTitle('Send by Email');
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <p>Email page</p>
    </Fragment>
  )
};

export default EmailPage;
