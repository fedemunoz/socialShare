import React from "react";
import AddButton from "../layout/AddButton";
import "./noAccounts.scss";

const NoAccounts = () => {
  return (
    <div className='no-accounts-container'>
      <h4>You don't have accounts yet!</h4>
      <AddButton type={"lg"} />
    </div>
  );
};

export default NoAccounts;
