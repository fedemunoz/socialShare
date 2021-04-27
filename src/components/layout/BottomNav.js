import React, { useContext, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PageContext from "../../context/page/pageContext";
import "./bottomNav.scss";
import constants from "../../shared/constants";
import { ReactComponent as QrIcon } from "../../assets/icons/qr-code.svg";

const BottomNav = () => {
  const pageContext = useContext(PageContext);
  const { title, previousTab } = pageContext;

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const onChange = (event, newValue) => {
    pageContext.setPage({ title: newValue });
  };

  return (
    !previousTab && (
      <div className='app-bottom-navbar'>
        <BottomNavigation value={title} onChange={onChange} showLabels>
          <BottomNavigationAction
            value={constants.EMAIL_TAB.title}
            label={constants.EMAIL_TAB.label}
            icon={<MailOutlineIcon />}
          />
          <BottomNavigationAction
            value={constants.MY_QR_TAB.title}
            label={constants.MY_QR_TAB.label}
            icon={<QrIcon />}
          />
          <BottomNavigationAction
            value={constants.ACCOUNTS_TAB.title}
            label={constants.ACCOUNTS_TAB.label}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    )
  );
};

export default BottomNav;
