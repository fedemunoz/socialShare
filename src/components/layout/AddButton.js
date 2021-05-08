import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styles from "./addButton.module.scss";

const AddButton = ({ type }) => {
  const button =
    type === "sm" ? (
      <Fab aria-label='add' className={styles.smButton}>
        <AddIcon />
      </Fab>
    ) : (
      <Button variant='contained' startIcon={<AddIcon />}>
        Add account
      </Button>
    );

  return (
    <Link className={styles.link} to='/add-account'>
      {button}
    </Link>
  );
};

AddButton.propTypes = {
  type: PropTypes.string.isRequired,
};
AddButton.defaultProps = {
  type: "sm",
};

export default AddButton;
