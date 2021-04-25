import React, { useContext } from "react";
import List from "@material-ui/core/List";
import AccountsContext from "../../context/accounts/accountsContext";
import UserAccount from "./UserAccount";

const addButtonPadding = {
  paddingBottom: "75px",
};

const UserAccountsList = () => {
  const accountsContext = useContext(AccountsContext);

  const { userAccounts } = accountsContext;

  return (
    <List style={addButtonPadding}>
      {userAccounts.map((account) => (
        <UserAccount key={account.id} account={account} />
      ))}
    </List>
  );
};

export default UserAccountsList;
