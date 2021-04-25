import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import * as actions from "./pageActions";
import constants from "../../shared/constants";

const PageState = (props) => {
  const initialState = {
    title: constants.MY_QR_TAB.title,
    previousTab: "",
    modal: null,
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const setPage = (pageData) => {
    dispatch({
      type: actions.SET_PAGE,
      payload: pageData,
    });
  };

  const showModal = (modalData) => {
    dispatch({
      type: actions.SHOW_MODAL,
      payload: modalData,
    });
  };

  const hideModal = () => {
    dispatch({
      type: actions.HIDE_MODAL,
    });
  };

  return (
    <PageContext.Provider
      value={{
        title: state.title,
        previousTab: state.previousTab,
        modal: state.modal,
        setPage,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
