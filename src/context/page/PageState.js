import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import * as actions from "./pageActions";
import constants from "../../shared/constants";

const PageState = (props) => {
  const initialState = {
    title: constants.MY_QR_TAB.title,
    previousTab: "",
    showAccountsHint: true,
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const setPage = (pageData) => {
    dispatch({
      type: actions.SET_PAGE,
      payload: pageData,
    });
  };

  const setShowAccountsHint = (showHint) => {
    dispatch({
      type: actions.SET_SHOW_ACCOUNTS_HINT,
      payload: showHint,
    });
  };

  return (
    <PageContext.Provider
      value={{
        title: state.title,
        previousTab: state.previousTab,
        showAccountsHint: state.showAccountsHint,
        setPage,
        setShowAccountsHint,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
