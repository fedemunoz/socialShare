import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CropFreeIcon from '@material-ui/icons/CropFree';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PageContext from '../../context/page/pageContext';
import './bottomNav.scss';

const BottomNav = () => {
  const pageContext = useContext(PageContext);
  const [value, setValue] = useState(pageContext.route);
  const history = useHistory();

  useEffect(() => {
    history.push(pageContext.route);
    // eslint-disable-next-line
  }, []);

  const onChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  }

  return (
    <div className="app-bottom-navbar">
      <BottomNavigation
        value={value}
        onChange={onChange}
        showLabels
      >      
        <BottomNavigationAction value="email" label="Email" icon={<MailOutlineIcon />} />
        <BottomNavigationAction value="my-qr" label="My QR" icon={<CropFreeIcon />} />
        <BottomNavigationAction value="accounts" label="Accounts" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
