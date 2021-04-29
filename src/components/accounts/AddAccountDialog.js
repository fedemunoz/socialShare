import React, { useContext, useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fade from "@material-ui/core/Fade";

import Icon from "../layout/Icon";
import AccountsContext from "../../context/accounts/accountsContext";
import NotificationsContext from "../../context/notifications/notificationsContext";
import "./addAccountDialog.scss";

const iconMargin = {
  marginRight: "0.6rem",
};

const AddAccountDialog = () => {
  const [input, setInput] = useState("");
  const notificationsContext = useContext(NotificationsContext);
  const accountsContext = useContext(AccountsContext);
  const { currentAddAccount, showAddAccount, addAccount } = accountsContext;

  const onChangeInput = (e) => {
    return setInput(e.currentTarget.value.replace(/\s+/g, "").toLowerCase());
  };

  const handleClose = () => {
    setInput("");
    showAddAccount(false);
  };

  const handleConfirm = () => {
    if (input.length < 3) {
      return notificationsContext.showAlert({
        msg: "Error. Enter a valid account.",
        type: "error",
        position: "top",
      });
    }
    addAccount(currentAddAccount, input);
    handleClose();
  };

  return (
    currentAddAccount && (
      <Fade in>
        <div>
          <Dialog
            open
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
            fullWidth
          >
            <DialogTitle id='form-dialog-title'>
              <Icon
                icon={currentAddAccount.logo}
                type={currentAddAccount.faIcon}
                size='1x'
                classes='color-primary'
                styles={iconMargin}
              />
              {currentAddAccount.name}
            </DialogTitle>
            <DialogContent>
              <TextField
                required
                autoFocus
                margin='dense'
                id='account'
                placeholder={currentAddAccount.placeholder}
                type='text'
                fullWidth
                onChange={onChangeInput}
                value={input}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {currentAddAccount.urlPrefix.replace(
                        /https:\/\/|mailto:|tel:/gi,
                        ""
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button onClick={handleConfirm} color='primary'>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fade>
    )
  );
};

export default AddAccountDialog;
