import React, { Fragment, useContext, useEffect } from "react";
import AccountsContext from "../../context/accounts/accountsContext";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "../layout/Icon";
import Spinner from "../layout/Spinner";
import "./accountSelector.scss";

const AccountSelector = () => {
  const [allSelected, setallSelected] = React.useState(true);
  const [indeterminate, setIndeterminate] = React.useState(false);

  const accountsContext = useContext(AccountsContext);
  const {
    loading,
    userAccounts,
    selectAllAccounts,
    selectAccount,
  } = accountsContext;

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

  return loading ? (
    <Spinner />
  ) : (
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
                <Fragment>
                  <Icon icon={account.logo} size='lg' />
                  {account.title}
                </Fragment>
              }
              labelPlacement='start'
              className={`banner ${account.email ? "selected-checkbox" : ""}`}
            />
          ))}
        </FormGroup>
        <FormHelperText className='align-self-end'>
          Select at least one account
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default AccountSelector;
