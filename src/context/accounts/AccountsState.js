import React, { useReducer } from "react";
import { set, get } from "idb-keyval";

import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";
import availableAccountsJson from "../../assets/data/available_accounts.json";
import { v4 as uuidv4 } from "uuid";

const AccountsState = (props) => {
  const initialState = {
    availableAccounts: [],
    userAccounts: null,
    currentQr: null,
    currentAddAccount: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getUserAccounts = async () => {
    setLoading();
    const userAccountsJson = await get("accounts");

    dispatch({
      type: actions.GET_USER_ACCOUNTS,
      payload: userAccountsJson || [],
    });
  };

  const getAvailableAccounts = async () => {
    setLoading();
    dispatch({
      type: actions.GET_AVAILABLE_ACCOUNTS,
      payload: availableAccountsJson,
    });
  };

  const showQrAccount = (account) => {
    dispatch({
      type: actions.SHOW_QR_ACCOUNT,
      payload: account,
    });
  };

  const showAddAccount = (account) => {
    dispatch({
      type: actions.SHOW_ADD_ACCOUNT,
      payload: account,
    });
  };

  const addAccount = async (account, value) => {
    setLoading();
    const newAccount = {
      id: uuidv4(),
      logo: account.logo,
      title: account.name,
      name: value,
      url: `http://www.${account.urlPrefix}${value}`,
      email: true,
    };

    const userAccounts = [...state.userAccounts, newAccount];
    await updateUserAccounts(userAccounts);
  };

  const removeAccount = async (accountId) => {
    setLoading();

    const userAccounts = state.userAccounts.filter(
      (account) => account.id !== accountId
    );
    await updateUserAccounts(userAccounts);
  };

  const selectAllAccounts = async (selectAll) => {
    const userAccounts = state.userAccounts.map((account) => ({
      ...account,
      email: selectAll,
    }));
    await updateUserAccounts(userAccounts);
  };

  const selectAccount = async (id, value) => {
    const userAccounts = state.userAccounts.map((account) => {
      return account.id.toString() !== id
        ? account
        : {
            ...account,
            email: value,
          };
    });
    await updateUserAccounts(userAccounts);
  };

  const updateUserAccounts = async (userAccounts) => {
    await set("accounts", userAccounts);

    dispatch({
      type: actions.UPDATE_ACCOUNTS,
      payload: userAccounts,
    });
  };

  const sendEmail = (accounts) => {};

  return (
    <AccountsContext.Provider
      value={{
        loading: state.loading,
        userAccounts: state.userAccounts,
        availableAccounts: state.availableAccounts,
        currentQr: state.currentQr,
        currentAddAccount: state.currentAddAccount,
        setLoading,
        getUserAccounts,
        getAvailableAccounts,
        showQrAccount,
        showAddAccount,
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
