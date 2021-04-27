import React from "react";
import Fade from "@material-ui/core/Fade";

import UserAccountsList from "../../accounts/UserAccountsList";

const AccountsTab = () => (
  <Fade in>
    <div>
      <UserAccountsList />
    </div>
  </Fade>
);

export default AccountsTab;
