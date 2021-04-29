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
  const [showError, setshowError] = useState(false);

  const notificationsContext = useContext(NotificationsContext);
  const accountsContext = useContext(AccountsContext);
  const { userAccounts, sendEmail } = accountsContext;

  const onChange = (event) => {
    const emailTo = event.target.value;
    setEmailInput(emailTo);
    validator.isEmail(emailTo) ? setshowError(false) : setshowError(true);
  };

  const onClick = () => {
    if (showError || !emailInput)
      return showErrorAlert("Error. Invalid Email.");

    const emailAccounts = userAccounts.filter((account) => account.email);
    if (!emailAccounts.length)
      return showErrorAlert("Error. Select at least one account.");

    sendEmail(emailAccounts, emailInput);
    setEmailInput("");
  };

  const showErrorAlert = (msg) => {
    notificationsContext.showAlert({
      msg: msg,
      type: "error",
      position: "top",
    });
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
          <Button color='primary' variant='contained' onClick={onClick}>
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToEmail;
