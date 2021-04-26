import React, { useContext } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "../layout/Icon";
// import AccountsContext from "../../context/accounts/accountsContext";
import NotificationsContext from "../../context/notifications/notificationsContext";

const itemStyle = {
  flex: "1",
  display: "flex",
  alignItems: "center",
};

const UserAccount = ({ account: { id, logo, name, url } }) => {
  // const accountsContext = useContext(AccountsContext);
  const notificationsContext = useContext(NotificationsContext);

  const onClick = () => window.open(url);

  const confirmRemove = () => {
    notificationsContext.showConfirm({
      title: "",
      msg: "Are you sure you want to delete this account?",
    });
    // accountsContext.removeAccount(id);
  };

  return (
    <ListItem button>
      <div style={itemStyle} onClick={onClick}>
        <ListItemIcon>
          <Icon icon={logo} size='lg' className='color-primary' />
        </ListItemIcon>
        <ListItemText primary={name} />
      </div>
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
