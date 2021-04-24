import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import * as actions from "./pageActions";

const PageState = (props) => {
  const initialState = {
    title: null,
    backUrl: "",
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
        backUrl: state.backUrl,
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
