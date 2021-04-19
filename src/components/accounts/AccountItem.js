import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab  } from '@fortawesome/free-brands-svg-icons';
import AccountsContext from '../../context/accounts/accountsContext';
import DialogContext from '../../context/dialog/dialogContext';
import './accountItems.scss';

const AccountItem = ({ account: { id, logo, name, url } }) => {
  library.add(fab);
  const accountsContext = useContext(AccountsContext);
  const dialogContext = useContext(DialogContext);

  const itemClick = () => window.open(url, "_blank");

  const confirmRemove = () => {
    console.log(dialogContext)
    dialogContext.showConfirm('', 'Are you sure you want to delete this account?')
    console.log(123131)
    // accountsContext.removeAccount(id);
  };

  return (
    <div className="account-container">
      <div className='card' onClick={itemClick}>        
        <h3><FontAwesomeIcon icon={['fab', logo]} size="lg" className="logo-icon" /> {name}</h3>
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
