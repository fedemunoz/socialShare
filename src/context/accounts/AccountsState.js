import React, { useReducer } from "react";
import { set, get } from "idb-keyval";

import AccountsContext from "./accountsContext";
import AccountsReducer from "./accountsReducer";
import * as actions from "./accountsActions";
import availableAccountsJson from "../../assets/data/available_accounts.json";

async function loadDummyData() {
  await set("accounts", [
    {
      id: 0,
      logo: "instagram",
      title: "Instagram",
      name: "thenomadclub",
      url: "http://www.instagram.com/thenomadclub",
      email: true,
    },
    {
      id: 1,
      logo: "facebook",
      title: "Facebook",
      name: "jdsakjas",
      url: "http://www.facebook.com/jdsakjas",
      email: true,
    },
    {
      id: 2,
      logo: "twitter",
      title: "Twitter",
      name: "fedemunoz88",
      url: "http://www.twitter.com/fedemunoz88",
      email: true,
    },
    {
      id: 3,
      logo: "youtube",
      title: "Youtube",
      name: "jdsakjas",
      url: "http://www.youtube.com/jdsakjas",
      email: true,
    },
    {
      id: 4,
      logo: "spotify",
      title: "Spotify",
      name: "jdsakjas",
      url: "http://www.spotify.com/jdsakjas",
      email: true,
    },
    {
      id: 5,
      logo: "google",
      title: "Google",
      name: "jdsakjas@gmail.com",
      url: "mailto:jdsakjas@gmail.com",
      email: true,
    },
    {
      id: 6,
      logo: "linkedin",
      title: "Linkedin",
      name: "jdsakjas",
      url: "http://www.linkedin.com/jdsakjas",
      email: true,
    },
  ]);
}

const AccountsState = (props) => {
  const initialState = {
    availableAccounts: [],
    userAccounts: null,
    currentQr: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AccountsReducer, initialState);

  const setLoading = () => {
    dispatch({ type: actions.SET_LOADING });
  };

  const getUserAccounts = async () => {
    setLoading();
    await loadDummyData();
    const userAccountsJson = await get("accounts");
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

  const showQrAccount = (account) => {
    dispatch({
      type: actions.SHOW_QR_ACCOUNT,
      payload: account,
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
        currentQr: state.currentQr,
        setLoading,
        getUserAccounts,
        getAvailableAccounts,
        showQrAccount,
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
