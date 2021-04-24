import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import validator from "validator";
import AccountsContext from "../../context/accounts/accountsContext";
import PageContext from "../../context/page/pageContext";
import "./sendToEmail.scss";

const SendToEmail = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showError, setshowError] = useState(false);

  const pageContext = useContext(PageContext);
  const accountsContext = useContext(AccountsContext);
  const { accounts, sendEmail } = accountsContext;

  const onChange = (event) => {
    if (buttonDisabled) setButtonDisabled(false);
    validator.isEmail(event.target.value)
      ? setshowError(false)
      : setshowError(true);
  };

  const onClick = () => {
    const emailAccounts = accounts.filter((account) => account.email);
    !emailAccounts.length
      ? pageContext.showModal({
          title: "Error",
          msg: "Select at least one account.",
        })
      : sendEmail(emailAccounts);
  };

  return (
    <div className='app-send-to-email'>
      <Grid container spacing={2} alignItems='flex-end'>
        <Grid item className='input-slot'>
          <TextField
            required
            label='Email to'
            onChange={onChange}
            error={showError}
            helperText={showError && "Enter a valid email address."}
          />
        </Grid>
        <Grid item className={showError ? "align-self-center" : ""}>
          <Button
            variant='contained'
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
