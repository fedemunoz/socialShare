import React, { Fragment, useContext,useEffect } from 'react';
import PageContext from '../../context/page/pageContext';

const MyQrPage = () => {
  const pageContext = useContext(PageContext);

  useEffect(() => {
    pageContext.setTitle('My QR');
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <p>MyQR page</p>
    </Fragment>
  )
};

export default MyQrPage;
