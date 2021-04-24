import React, { useReducer } from "react";
import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";

const AccountsState = (props) => {
  const initialState = {
    availableAccounts: [],
    userAccounts: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getUserAccounts = async () => {
    setLoading();
    const response = await fetch("../../data/test_user_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const userAccounts = await response.json();

    dispatch({
      type: actions.GET_USER_ACCOUNTS,
      payload: userAccounts,
    });
  };

  const getAvailableAccounts = async () => {
    setLoading();
    const response = await fetch("../../data/available_accounts.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const allAccounts = await response.json();

    dispatch({
      type: actions.GET_AVAILABLE_ACCOUNTS,
      payload: allAccounts,
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

  const sendEmail = (accounts) => {
    dispatch({
      type: actions.SEND_EMAIL,
      payload: accounts,
    });
  };

  return (
    <AccountsContext.Provider
      value={{
        loading: state.loading,
        userAccounts: state.userAccounts,
        availableAccounts: state.availableAccounts,
        setLoading,
        getUserAccounts,
        getAvailableAccounts,
        addAccount,
        removeAccount,
        selectAllAccounts,
        selectAccount,
        sendEmail,
      }}
    >
      {props.children}
    </AccountsContext.Provider>
  );
};

export default AccountsState;
