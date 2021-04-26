import React, { useReducer } from "react";
import NotificationsContext from "./notificationsContext";
import NotificationsReducer from "./notificationsReducer";
import * as actions from "./notificationsActions";

const NotificationsState = (props) => {
  const initialState = {
    confirm: null,
    modal: null,
  };

  const [state, dispatch] = useReducer(NotificationsReducer, initialState);

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

  const showConfirm = (confirmData) => {
    dispatch({
      type: actions.SHOW_CONFIRM,
      payload: confirmData,
    });
  };

  const confirmAction = (res) => {
    dispatch({
      type: actions.HIDE_CONFIRM,
      payload: res,
    });
  };

  const cancelConfirm = (res) => {
    dispatch({
      type: actions.HIDE_CONFIRM,
      payload: res,
    });
  };

  return (
    <NotificationsContext.Provider
      value={{
        confirm: state.confirm,
        modal: state.modal,
        showModal,
        hideModal,
        showConfirm,
        confirmAction,
        cancelConfirm,
      }}
    >
      {props.children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsState;
