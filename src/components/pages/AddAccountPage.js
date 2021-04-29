import React, { useContext, useEffect } from "react";
import Slide from "@material-ui/core/Slide";

import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import Spinner from "../layout/Spinner";
import ContentDivider from "../layout/ContentDivider";
import AccountCategory from "../accounts/AccountCategory";
import AddAccountModal from "../accounts/AddAccountModal";
import constants from "../../shared/constants";

const AddAccountPage = () => {
  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { loading, availableAccounts, getAvailableAccounts } = accountsContext;

  useEffect(() => {
    pageContext.setPage({
      title: constants.ADD_ACCOUNT_PAGE.title,
      previousTab: constants.ACCOUNTS_TAB.title,
    });
    if (!availableAccounts.length) getAvailableAccounts();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Slide direction='left' in mountOnEnter unmountOnExit>
      <div>
        <AddAccountModal />
        {availableAccounts.map((accountCategory) => (
          <div key={accountCategory.name}>
            <AccountCategory accountCategory={accountCategory} />
            <ContentDivider />
          </div>
        ))}
      </div>
    </Slide>
  );
};

export default AddAccountPage;
