import React, { useContext } from 'react';
import AccountsContext from '../../context/accounts/accountsContext';
import './sendToEmail.scss';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SendToEmail = () => {
  const accountsContext = useContext(AccountsContext);
  const { loading } = accountsContext;
  
  return (
    <div className="app-send-to-email">
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item className="input-slot">
          <TextField required label="Email to" />
        </Grid>
        <Grid item>
          <Button variant="contained" disabled={loading}>
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToEmail;
