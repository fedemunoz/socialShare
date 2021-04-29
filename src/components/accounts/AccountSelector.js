import React, { useContext, useEffect, useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import AccountsContext from "../../context/accounts/accountsContext";
import Icon from "../layout/Icon";
import "./accountSelector.scss";

const AccountSelector = () => {
  const [allSelected, setallSelected] = useState(true);
  const [indeterminate, setIndeterminate] = useState(false);

  const accountsContext = useContext(AccountsContext);
  const { userAccounts, selectAllAccounts, selectAccount } = accountsContext;

  useEffect(() => {
    checkSelection();
    // eslint-disable-next-line
  }, [accountsContext]);

  const selectAll = (event) => {
    selectAllAccounts(event.target.checked);
  };

  const selectCheckbox = (event) => {
    selectAccount(event.target.name, event.target.checked);
  };

  const checkSelection = () => {
    if (!userAccounts) return;

    let selected = 0;
    for (const account of userAccounts) {
      if (account.email) selected++;
    }

    switch (selected) {
      case userAccounts.length:
        setallSelected(true);
        setIndeterminate(false);
        break;
      case 0:
        setallSelected(false);
        setIndeterminate(false);
        break;
      default:
        setallSelected(false);
        setIndeterminate(true);
        break;
    }
  };

  return (
    <div className='account-selector-container'>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={allSelected}
              onChange={selectAll}
              name='all'
              indeterminate={indeterminate}
            />
          }
          label='Select all'
          labelPlacement='start'
          className={`banner ${allSelected ? "selected-checkbox" : ""}`}
        />
      </FormControl>

      <FormControl
        required
        error={!allSelected && !indeterminate}
        component='fieldset'
        className='full-width-input'
      >
        <FormGroup>
          {userAccounts.map((account) => (
            <FormControlLabel
              key={account.id}
              control={
                <Checkbox
                  checked={account.email}
                  onChange={selectCheckbox}
                  name={account.id.toString()}
                />
              }
              label={
                <div style={{ display: "flex" }}>
                  <div style={{ flex: "1" }}>
                    <Icon type={account.faIcon} icon={account.logo} size='lg' />
                    {account.title}
                  </div>
                  <div>
                    <FormHelperText className='helper-text'>
                      {account.name}
                    </FormHelperText>
                  </div>
                </div>
              }
              labelPlacement='start'
              className={`banner ${account.email ? "selected-checkbox" : ""}`}
            />
          ))}
        </FormGroup>

        {!allSelected && !indeterminate && (
          <FormHelperText className='align-self-end'>
            Select at least one account
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default AccountSelector;
