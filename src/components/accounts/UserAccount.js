import React, { useContext } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "../layout/Icon";
import AccountsContext from "../../context/accounts/accountsContext";

const itemStyle = {
  flex: "1",
  display: "flex",
  alignItems: "center",
};

const UserAccount = ({ account: { id, faIcon, logo, name, url } }) => {
  const accountsContext = useContext(AccountsContext);

  const onClick = () => window.open(url, "_blank");

  const confirmRemove = () => accountsContext.removeAccount(id);

  return (
    <ListItem button>
      <div style={itemStyle} onClick={onClick}>
        <ListItemIcon>
          <Icon type={faIcon} icon={logo} size='lg' classes='color-primary' />
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
