import React from "react";
import Fade from "@material-ui/core/Fade";

import UserAccountsList from "../../accounts/UserAccountsList";
import AddButton from "../../layout/AddButton";

const AccountsTab = () => (
  <Fade in>
    <div>
      <UserAccountsList />
      <AddButton />
    </div>
  </Fade>
);

export default AccountsTab;
