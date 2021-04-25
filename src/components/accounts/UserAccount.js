import React, { useContext } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "../layout/Icon";
// import AccountsContext from "../../context/accounts/accountsContext";
import DialogContext from "../../context/dialog/dialogContext";

const UserAccount = ({ account: { id, logo, name, url } }) => {
  // const accountsContext = useContext(AccountsContext);
  const dialogContext = useContext(DialogContext);

  const itemClick = () => window.open(url, "_blank");

  const confirmRemove = () => {
    dialogContext.showConfirm(
      "",
      "Are you sure you want to delete this account?"
    );
    // accountsContext.removeAccount(id);
  };

  return (
    <ListItem button>
      <ListItemIcon>
        <Icon icon={logo} size='lg' className='color-primary' />
      </ListItemIcon>
      <ListItemText primary={name} />
      <IconButton
        aria-label='delete'
        onClick={confirmRemove}
        className='deleteButton'
      >
        <DeleteIcon className='color-danger' />
      </IconButton>
    </ListItem>
  );
};

UserAccount.propTypes = {
  account: PropTypes.object.isRequired,
};

export default UserAccount;
