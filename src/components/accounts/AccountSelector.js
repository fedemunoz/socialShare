import React, { Fragment, useContext, useEffect } from 'react';
import AccountsContext from '../../context/accounts/accountsContext';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab  } from '@fortawesome/free-brands-svg-icons';
import Spinner from '../layout/Spinner';
import './accountSelector.scss';

const AccountSelector = () => {
  library.add(fab);
  const [ indeterminate, setIndeterminate ] = React.useState(false);
  
  const accountsContext = useContext(AccountsContext);
  const { 
    loading, 
    accounts, 
    selectedAccounts, 
    setSelectedAccounts, 
    selectAllAccounts
  } = accountsContext;

  useEffect(() => {
    selectAllAccounts(true);
    // eslint-disable-next-line
  }, []);

  const selectAll = (event) => {
    setIndeterminate(false);
    selectAllAccounts(event.target.checked);
  }
  
  const selectCheckbox = (event) => {
    setIndeterminate(true);
    let selection = { ...selectedAccounts }; 
    selection[event.target.name] = event.target.checked;
    setSelectedAccounts(selection);
  };

  const error = false;

  return loading ? <Spinner /> : (
    <div className="account-selector-container">
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox 
              checked={selectedAccounts.all} 
              onChange={selectAll} 
              name="all" 
              indeterminate={indeterminate} 
            />
          }
          label="Select all"
          labelPlacement="start"          
          className={`banner ${selectedAccounts.all ? "selected-checkbox" : ""}`}
        />
      </FormControl>
      
      <FormControl required error={error} component="fieldset" className="full-width-input">
        <FormGroup>
          {accounts.map(account => (
            <FormControlLabel
              key={account.id}
              control={
                <Checkbox 
                  checked={selectedAccounts[account.id]} 
                  onChange={selectCheckbox} 
                  name={account.id.toString()} 
                />
              }
              label={
                <Fragment>
                  <FontAwesomeIcon icon={['fab', account.logo]} size="lg" className="logo-icon" /> 
                  {account.title}
                </Fragment>
              }
              labelPlacement="start"
              className={`banner ${selectedAccounts[account.id] ? "selected-checkbox" : ""}`}
            />
          ))}
        </FormGroup>
        { error && <FormHelperText>Select at least one account</FormHelperText> }
      </FormControl>
    </div>
  );
};

export default AccountSelector;
