import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import validator from "validator";
import "./sendToEmail.scss";

const SendToEmail = () => {
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [showError, setshowError] = React.useState(false);

  const onChange = (event) => {
    if (buttonDisabled) setButtonDisabled(false);
    validator.isEmail(event.target.value)
      ? setshowError(false)
      : setshowError(true);
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
          <Button variant='contained' disabled={buttonDisabled || showError}>
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToEmail;
