import React, { useContext, useEffect } from "react";
import Fade from "@material-ui/core/Fade";

import NotificationsContext from "../../../context/notifications/notificationsContext";
import PageContext from "../../../context/page/pageContext";
import UserAccountsList from "../../accounts/UserAccountsList";
import AddButton from "../../layout/AddButton";

const AccountsTab = () => {
  const notificationsContext = useContext(NotificationsContext);
  const pageContext = useContext(PageContext);
  const { showAccountsHint, setShowAccountsHint } = pageContext;

  useEffect(() => {
    if (showAccountsHint) {
      notificationsContext.showAlert({
        msg: "Click accounts to preview.",
        type: "info",
        position: "top",
        time: 3000,
      });
    }
    setShowAccountsHint(false);
    // eslint-disable-next-line
  }, []);

  return (
    <Fade in>
      <div>
        <UserAccountsList />
        <AddButton />
      </div>
    </Fade>
  );
};

export default AccountsTab;
