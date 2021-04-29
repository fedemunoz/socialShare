import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import validator from "validator";
import AccountsContext from "../../context/accounts/accountsContext";
import NotificationsContext from "../../context/notifications/notificationsContext";
import "./sendToEmail.scss";

const SendToEmail = () => {
  const [emailInput, setEmailInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showError, setshowError] = useState(false);

  const notificationsContext = useContext(NotificationsContext);
  const accountsContext = useContext(AccountsContext);
  const { userAccounts, sendEmail } = accountsContext;

  const onChange = (event) => {
    if (buttonDisabled) setButtonDisabled(false);
    const emailTo = event.target.value;
    setEmailInput(emailTo);
    validator.isEmail(emailTo) ? setshowError(false) : setshowError(true);
  };

  const onClick = () => {
    const emailAccounts = userAccounts.filter((account) => account.email);
    if (!emailAccounts.length) {
      return notificationsContext.showAlert({
        msg: "Error. Select at least one account.",
        type: "error",
        position: "top",
      });
    }
    sendEmail(emailAccounts, emailInput);
    setEmailInput("");
  };

  return (
    <div className='app-send-to-email'>
      <Grid container spacing={2} alignItems='flex-end'>
        <Grid item className='input-slot'>
          <TextField
            required
            type='email'
            label='Email to'
            onChange={onChange}
            error={showError}
            value={emailInput}
            helperText={showError && "Enter a valid email address."}
          />
        </Grid>
        <Grid item className={showError ? "align-self-center" : ""}>
          <Button
            color='primary'
            variant='outlined'
            disabled={buttonDisabled || showError}
            onClick={onClick}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToEmail;
