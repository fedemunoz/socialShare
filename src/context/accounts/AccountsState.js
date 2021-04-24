import React, { useReducer } from "react";
import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";

const AccountsState = (props) => {
  const initialState = {
    accounts: [],
    showQr: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getAccounts = async () => {
    setLoading();
    const response = await fetch("../../data/test_user_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const accounts = await response.json();

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
    dispatch({
      type: actions.SELECT_ALL_ACCOUNTS,
      payload: selectAll,
    });
  };

  const selectAccount = (id, value) => {
    dispatch({
      type: actions.SELECT_ACCOUNT,
      payload: { id, value },
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
        showQr: state.showQr,
        setLoading,
        getAccounts,
        addAccount,
        removeAccount,
        selectAllAccounts,
        selectAccount,
        setShowQr,
      }}
    >
      {props.children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;
