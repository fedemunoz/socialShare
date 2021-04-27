import React, { useContext, useEffect } from "react";
import Slide from "@material-ui/core/Slide";

import PageContext from "../../context/page/pageContext";
import AccountsContext from "../../context/accounts/accountsContext";
import Spinner from "../layout/Spinner";
import NoAccounts from "../accounts/NoAccounts";
import EmailTab from "../pages/tabs/EmailTab";
import MyQrTab from "../pages/tabs/MyQrTab";
import AccountsTab from "../pages/tabs/AccountsTab";
import constants from "../../shared/constants";

const HomePage = () => {
  const accountsContext = useContext(AccountsContext);
  const pageContext = useContext(PageContext);
  const { loading, userAccounts, getUserAccounts } = accountsContext;
  const { title, previousTab } = pageContext;

  useEffect(() => {
    if (!userAccounts || !userAccounts.length) getUserAccounts();
    if (previousTab) pageContext.setPage({ title: previousTab });
    // eslint-disable-next-line
  }, []);

  if (loading || !userAccounts) {
    return <Spinner />;
  } else if (!userAccounts.length) {
    return <NoAccounts />;
  }

  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <div className='full-height'>
        {title === constants.EMAIL_TAB.title && <EmailTab />}
        {title === constants.MY_QR_TAB.title && (
          <MyQrTab userAccounts={userAccounts} />
        )}
        {title === constants.ACCOUNTS_TAB.title && <AccountsTab />}
      </div>
    </Slide>
  );
};

export default HomePage;
