import React, { useReducer, useContext } from "react";
import { set, get } from "idb-keyval";

import AccountsContext from "./accountsContext";
import NotificationsContext from "../notifications/notificationsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";
import availableAccountsJson from "../../assets/data/available_accounts.json";
import { v4 as uuidv4 } from "uuid";

const AccountsState = (props) => {
  const notificationsContext = useContext(NotificationsContext);

  const initialState = {
    availableAccounts: [],
    filteredAccounts: [],
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

  const getAvailableAccounts = () => {
    setLoading();
    dispatch({
      type: actions.GET_AVAILABLE_ACCOUNTS,
      payload: availableAccountsJson,
    });
  };

  const filterAccounts = (searchTerm) => {
    dispatch({
      type: actions.FILTER_ACCOUNTS,
      payload: searchTerm,
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
    try {
      setLoading();
      const newAccount = {
        id: uuidv4(),
        faIcon: account.faIcon,
        logo: account.logo,
        title: account.name,
        name: value,
        url: `${account.urlPrefix || ""}${value}`,
        email: true,
      };

      const userAccounts = [...state.userAccounts, newAccount];
      await updateUserAccounts(userAccounts);

      notificationsContext.showAlert({
        msg: "Account added!",
        type: "success",
        position: "bottom",
      });
    } catch (e) {
      showError();
    }
  };

  const showError = () =>
    notificationsContext.showAlert({
      msg: "Error. Please try again.",
      type: "error",
      position: "top",
    });

  const removeAccount = async (accountId) => {
    try {
      setLoading();

      const userAccounts = state.userAccounts.filter(
        (account) => account.id !== accountId
      );
      await updateUserAccounts(userAccounts);
    } catch (e) {
      showError();
    }
  };

  const selectAllAccounts = async (selectAll) => {
    try {
      const userAccounts = state.userAccounts.map((account) => ({
        ...account,
        email: selectAll,
      }));
      await updateUserAccounts(userAccounts);
    } catch (e) {
      showError();
    }
  };

  const selectAccount = async (id, value) => {
    try {
      const userAccounts = state.userAccounts.map((account) => {
        return account.id.toString() !== id
          ? account
          : {
              ...account,
              email: value,
            };
      });
      await updateUserAccounts(userAccounts);
    } catch (e) {
      showError();
    }
  };

  const updateUserAccounts = async (userAccounts) => {
    await set("accounts", userAccounts);

    dispatch({
      type: actions.UPDATE_ACCOUNTS,
      payload: userAccounts,
    });
  };

  const sendEmail = async (accounts) => {
    try {
      const response = await fetch("/.netlify/functions/sendmail", {
        method: "POST",
        body: JSON.stringify({
          subject: "Account Share",
          email: "fedemz88@gmail.com",
          accounts: [
            {
              name: "Twitter",
              url: "twitter.com/fedemunoz88",
            },
            {
              name: "Linkedin",
              url: "linkedin.com/in/federico-munoz-dev",
            },
          ],
        }),
      });

      console.log("response", response);
      response.ok
        ? notificationsContext.showAlert({
            msg: "Email sent!",
            type: "success",
            position: "top",
          })
        : showError();

      //all OK
    } catch (e) {
      console.log("catch", e);
      showError();
    }
  };

  return (
    <AccountsContext.Provider
      value={{
        loading: state.loading,
        userAccounts: state.userAccounts,
        availableAccounts: state.availableAccounts,
        filteredAccounts: state.filteredAccounts,
        currentQr: state.currentQr,
        currentAddAccount: state.currentAddAccount,
        setLoading,
        getUserAccounts,
        getAvailableAccounts,
        filterAccounts,
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
