import React, { useReducer } from "react";
import PageContext from "./pageContext";
import PageReducer from "./pageReducer";
import { SET_PAGE, SHOW_MODAL, HIDE_MODAL } from "./pageActions";

const PageState = (props) => {
  const initialState = {
    title: null,
    route: "",
    modal: null,
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const setPage = (pageData) => {
    dispatch({
      type: SET_PAGE,
      payload: pageData,
    });
  };

  const showModal = (modalData) => {
    dispatch({
      type: SHOW_MODAL,
      payload: modalData,
    });
  };

  const hideModal = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <PageContext.Provider
      value={{
        title: state.title,
        route: state.route,
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
