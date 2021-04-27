import React, { useReducer } from "react";
import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";
import availableAccountsJson from "../../assets/data/available_accounts.json";
import userAccountsJson from "../../assets/data/test_user_data.json";

const AccountsState = (props) => {
  const initialState = {
    availableAccounts: [],
    userAccounts: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getUserAccounts = async () => {
    setLoading();
    dispatch({
      type: actions.GET_USER_ACCOUNTS,
      payload: userAccountsJson,
    });
  };

  const getAvailableAccounts = async () => {
    setLoading();
    dispatch({
      type: actions.GET_AVAILABLE_ACCOUNTS,
      payload: availableAccountsJson,
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
