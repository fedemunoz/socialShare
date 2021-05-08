import React from "react";
import AddButton from "../layout/AddButton";
import styles from "./noAccounts.module.scss";

const NoAccounts = () => {
  return (
    <div className={styles.container}>
      <h4>You don't have accounts yet!</h4>
      <AddButton type='lg' />
    </div>
  );
};

export default NoAccounts;
