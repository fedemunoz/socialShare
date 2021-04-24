import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import * as actions from "./pageActions";

const PageState = (props) => {
  const initialState = {
    title: null,
    route: "",
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

  const setBackUrl = (backUrl) => {
    dispatch({
      type: actions.SET_BACK_URL,
      payload: backUrl,
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
        route: state.route,
        modal: state.modal,
        backUrl: state.backUrl,
        setPage,
        setBackUrl,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
