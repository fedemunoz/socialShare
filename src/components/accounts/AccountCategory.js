import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Icon from "../layout/Icon";
import "../accounts/accountItems.scss";

const AccountCategory = ({ accountCategory }) => {
  const addAccount = (account) => {};

  return (
    accountCategory.accounts.length && (
      <Fragment>
        <h3>{accountCategory.name}</h3>
        {accountCategory.accounts.map((account) => (
          <div className='account-container' key={account.name}>
            <div className='card' onClick={() => addAccount(account)}>
              <h3>
                <Icon icon={account.logo} size='lg' type={account.faIcon} />{" "}
                {account.name}
              </h3>
            </div>
          </div>
        ))}
      </Fragment>
    )
  );
};

AccountCategory.propTypes = {
  accountCategory: PropTypes.object.isRequired,
};

export default AccountCategory;
