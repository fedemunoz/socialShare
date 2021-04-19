import React, { useReducer } from 'react';
import AccountsContext from './accountsContext';
import AccountsReducer from './accountsReducer';
import { GET_ACCOUNTS, ADD_ACCOUNT, REMOVE_ACCOUNT, SET_LOADING } from '../types';

const AccountsState = props => {
  const initialState = {
    accounts: [],
    loading: false
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  }

  const getAccounts = async() => {
    setLoading();
    const response = await fetch('../../data/test_user_data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    const accounts = await response.json();
    
    dispatch({
      type: GET_ACCOUNTS,
      payload: accounts
    });
  };

  const addAccount = (account) => {
    setLoading();
    dispatch({
      type: ADD_ACCOUNT,
      payload: account
    });
  };

  const removeAccount = (accountId) => {
    setLoading();    
    dispatch({
      type: REMOVE_ACCOUNT,
      payload: accountId
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        accounts: state.accounts,
        loading: state.loading,
        setLoading,
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
