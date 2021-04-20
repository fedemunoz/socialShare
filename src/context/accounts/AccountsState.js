import React, { useReducer } from 'react';
import AccountsContext from './accountsContext';
import AccountsReducer from './accountsReducer';
import { 
  GET_ACCOUNTS, 
  ADD_ACCOUNT, 
  REMOVE_ACCOUNT, 
  SET_LOADING, 
  SET_SELECTED_ACCOUNTS
} from '../types';

const AccountsState = props => {
  const initialState = {
    accounts: [],
    selectedAccounts: {}, 
    loading: false
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  }

  const getFromStorage = async () => {
    const response = await fetch('../../data/test_user_data.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    return response.json();
  }

  const getAccounts = async() => {
    setLoading();    
    const accounts = await getFromStorage();
    
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

  const selectAllAccounts = async (selectAll) => {
    const accounts = await getFromStorage()
    let selection = { 'all': selectAll };
    for (const account of accounts) {
      selection[account.id] = selectAll;
    }

    dispatch({
      type: SET_SELECTED_ACCOUNTS,
      payload: selection
    });
  }

  const setSelectedAccounts = (selection) => {
    dispatch({
      type: SET_SELECTED_ACCOUNTS,
      payload: selection
    });
  }

  return (
    <AccountsContext.Provider
      value={{
        loading: state.loading,
        accounts: state.accounts,
        selectedAccounts: state.selectedAccounts, 
        setLoading,
        getAccounts,
        addAccount,
        removeAccount,
        selectAllAccounts,
        setSelectedAccounts
      }}
    >
      {props.children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;
