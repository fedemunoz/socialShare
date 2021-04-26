import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NotificationsContext from "../../context/notifications/notificationsContext";

const ConfirmDialog = () => {
  const notificationsContext = useContext(NotificationsContext);
  const { confirm, cancelConfirm, confirmAction } = notificationsContext;

  return (
    confirm && (
      <div>
        <Dialog
          open
          onClose={() => cancelConfirm()}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{confirm.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {confirm.msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => cancelConfirm()} color='primary'>
              Cancel
            </Button>
            <Button onClick={() => confirmAction()} color='primary' autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
};

export default ConfirmDialog;
