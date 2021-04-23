import React, { useReducer } from "react";
import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";

const AccountsState = (props) => {
  const initialState = {
    accounts: [],
    selectedAccounts: {},
    showQr: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getFromStorage = async () => {
    const response = await fetch("../../data/test_user_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  };

  const getAccounts = async () => {
    setLoading();
    const accounts = await getFromStorage();

    dispatch({
      type: actions.GET_ACCOUNTS,
      payload: accounts,
    });
  };

  const addAccount = (account) => {
    setLoading();
    dispatch({
      type: actions.ADD_ACCOUNT,
      payload: account,
    });
  };

  const removeAccount = (accountId) => {
    setLoading();
    dispatch({
      type: actions.REMOVE_ACCOUNT,
      payload: accountId,
    });
  };

  const selectAllAccounts = async (selectAll) => {
    const accounts = await getFromStorage();
    let selection = { all: selectAll };
    for (const account of accounts) {
      selection[account.id] = selectAll;
    }

    dispatch({
      type: actions.SET_SELECTED_ACCOUNTS,
      payload: selection,
    });
  };

  const setSelectedAccounts = (selection) => {
    dispatch({
      type: actions.SET_SELECTED_ACCOUNTS,
      payload: selection,
    });
  };

  const setShowQr = (account) => {
    dispatch({
      type: actions.SET_SHOW_QR,
      payload: account,
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        loading: state.loading,
        accounts: state.accounts,
        selectedAccounts: state.selectedAccounts,
        showQr: state.showQr,
        setLoading,
        getAccounts,
        addAccount,
        removeAccount,
        selectAllAccounts,
        setSelectedAccounts,
        setShowQr,
      }}
    >
      {props.children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;
