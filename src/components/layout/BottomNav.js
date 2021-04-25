import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CropFreeIcon from "@material-ui/icons/CropFree";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PageContext from "../../context/page/pageContext";
import "./bottomNav.scss";

const BottomNav = () => {
  const [route, setRoute] = useState("/");
  const pageContext = useContext(PageContext);
  const history = useHistory();

  useEffect(() => {
    history.push(route);
    // eslint-disable-next-line
  }, []);

  const onChange = (event, newValue) => {
    setRoute(newValue);
    history.push(newValue);
  };

  return (
    !pageContext.showBackButton && (
      <div className='app-bottom-navbar'>
        <BottomNavigation value={route} onChange={onChange} showLabels>
          <BottomNavigationAction
            value='email'
            label='Email'
            icon={<MailOutlineIcon />}
          />
          <BottomNavigationAction
            value='/'
            label='My QR'
            icon={<CropFreeIcon />}
          />
          <BottomNavigationAction
            value='accounts'
            label='Accounts'
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    )
  );
};

export default BottomNav;
