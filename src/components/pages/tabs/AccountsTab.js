import React, { useContext, useEffect } from "react";
import Fade from "@material-ui/core/Fade";

import NotificationsContext from "../../../context/notifications/notificationsContext";
import UserAccountsList from "../../accounts/UserAccountsList";
import AddButton from "../../layout/AddButton";

const AccountsTab = () => {
  const notificationsContext = useContext(NotificationsContext);

  useEffect(() => {
    notificationsContext.showAlert({
      msg: "Click accounts to preview.",
      type: "info",
      position: "top",
    });
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
