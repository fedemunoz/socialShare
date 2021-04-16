import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddButton = () => {
  return (
    <Fab color="primary" aria-label="add" className="add-button">
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
