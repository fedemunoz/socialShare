import React, { Fragment } from "react";
import UserAccountsList from "../../accounts/UserAccountsList";
import AddButton from "../../layout/AddButton";

const AccountsTab = () => (
  <Fragment>
    <UserAccountsList />
    <AddButton />
  </Fragment>
);

export default AccountsTab;
