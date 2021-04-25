import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "../layout/Icon";

const titleStyle = {
  marginTop: "0.8rem",
};

const AccountCategory = ({ accountCategory }) => {
  const addAccount = (account) => {};

  return (
    accountCategory.accounts.length && (
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
                className='color-primary'
              />
            </ListItemIcon>
            <ListItemText primary={account.name} />
          </ListItem>
        ))}
      </List>
    )
  );
};

AccountCategory.propTypes = {
  accountCategory: PropTypes.object.isRequired,
};

export default AccountCategory;
