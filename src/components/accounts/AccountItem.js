import React from 'react';
import PropTypes from 'prop-types';

const AccountItem = ({ account: { id, logo, name, url } }) => {
  return (
    <div className="account-container">
      <div className='card text-center'>
        <img
          src={logo}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{name}</h3>
      </div>
      <div>Borrar</div>
    </div>
  );
};

AccountItem.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountItem;
