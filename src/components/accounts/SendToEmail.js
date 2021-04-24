import React, { useContext } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import "./sendToEmail.scss";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SendToEmail = () => {
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [showError, setshowError] = React.useState(false);

  const accountsContext = useContext(AccountsContext);
  const { loading } = accountsContext;

  const onChange = (event) => {
    if (buttonDisabled) setButtonDisabled(false);
    const value = event.target.value;
    isEmail(value) ? setshowError(false) : setshowError(true);
  };

  const isEmail = (val) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return false;
    }
    return true;
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
        <Grid item className={showError ? "align-center" : ""}>
          <Button
            variant='contained'
            disabled={loading || buttonDisabled || showError}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToEmail;
