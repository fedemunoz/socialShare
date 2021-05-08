import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./spinner.module.scss";

const Spinner = () => (
  <div className={styles.container}>
    <CircularProgress />
  </div>
);

export default Spinner;
