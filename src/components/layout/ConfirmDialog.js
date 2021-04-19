import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContext from '../../context/dialog/dialogContext';

const ConfirmDialog = () => {
  const dialogContext = useContext(DialogContext);
  const { dialog } = dialogContext;

  const handleClose = () => dialog.hideConfirm('asdas');

  return (
    <div>
      <Dialog
        open={dialog.show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{ dialog.title }</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { dialog.msg }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
