import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CropFreeIcon from '@material-ui/icons/CropFree';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const BottomNav = ({ title }) => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const onChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={onChange}
      showLabels
      className="bottom-nav"
    >      
      <BottomNavigationAction value="email" label="Email" icon={<MailOutlineIcon />} />
      <BottomNavigationAction value="my-qr" label="My QR" icon={<CropFreeIcon />} />
      <BottomNavigationAction value="accounts" label="Accounts" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
