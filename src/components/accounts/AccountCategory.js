import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AccountsContext from "../../context/accounts/accountsContext";
import Icon from "../layout/Icon";

const titleStyle = {
  marginTop: "0.8rem",
};

const AccountCategory = ({ accountCategory }) => {
  const accountsContext = useContext(AccountsContext);
  const addAccount = (account) => {
    accountsContext.showAddAccount(account);
  };

  return (
    <Fragment>
      <List>
        <h3 style={titleStyle}>{accountCategory.name}</h3>
        {accountCategory.accounts.map((account) => (
          <ListItem
            button
            key={account.name}
            onClick={() => addAccount(account)}
          >
            <ListItemIcon>
              <Icon
                icon={account.logo}
                size='lg'
                type={account.faIcon}
                classes='color-primary'
              />
            </ListItemIcon>
            <ListItemText primary={account.name} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

AccountCategory.propTypes = {
  accountCategory: PropTypes.object.isRequired,
};

export default AccountCategory;
