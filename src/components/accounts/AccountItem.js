import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '../layout/Icon';
import AccountsContext from '../../context/accounts/accountsContext';
import DialogContext from '../../context/dialog/dialogContext';
import './accountItems.scss';

const AccountItem = ({ account: { id, logo, name, url } }) => {
  const accountsContext = useContext(AccountsContext);
  const dialogContext = useContext(DialogContext);

  const itemClick = () => window.open(url, "_blank");

  const confirmRemove = () => {
    dialogContext.showConfirm('', 'Are you sure you want to delete this account?')
    // accountsContext.removeAccount(id);
  };

  return (
    <div className="account-container">
      <div className='card' onClick={itemClick}>        
        <h3><Icon icon={logo} size="lg" /> {name}</h3>
      </div>
      <IconButton aria-label="delete" onClick={confirmRemove} className="deleteButton">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

AccountItem.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountItem;
