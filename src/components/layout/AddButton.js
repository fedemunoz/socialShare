import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./addButton.scss";

const AddButton = ({ type }) => {
  return type === "sm" ? (
    <div className='app-add-button'>
      <Fab aria-label='add' className='sm-button'>
        <AddIcon />
      </Fab>
    </div>
  ) : (
    <div className='app-add-button'>
      <Button variant='contained' startIcon={<AddIcon />}>
        Add account
      </Button>
    </div>
  );
};

AddButton.propTypes = {
  type: PropTypes.string.isRequired,
};
AddButton.defaultProps = {
  type: "sm",
};

export default AddButton;
