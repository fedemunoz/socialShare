import React, { useReducer } from 'react';
import AccountsContext from './accountsContext';
import AccountsReducer from './accountsReducer';
import { GET_ACCOUNTS, ADD_ACCOUNT, REMOVE_ACCOUNT } from '../types';

const AccountsState = props => {
  const initialState = {
    accounts: []
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const getAccounts = () => {
    dispatch({
      type: GET_ACCOUNTS,
      payload: [{ 'id': 1, 'logo': '2', 'name' : 'name', 'url': 'url' }]
    });
  };

  const addAccount = (account) => {
    dispatch({
      type: ADD_ACCOUNT,
      payload: account
    });
  };

  const removeAccount = (account) => {
    dispatch({
      type: REMOVE_ACCOUNT,
      payload: account
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        accounts: state.accounts,
        getAccounts,
        addAccount,
        removeAccount
      }}
    >
      {props.children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;
