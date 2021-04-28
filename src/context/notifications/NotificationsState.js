import React, { useReducer } from "react";
import NotificationsContext from "./notificationsContext";
import NotificationsReducer from "./notificationsReducer";
import * as actions from "./notificationsActions";

const NotificationsState = (props) => {
  const initialState = {
    confirm: null,
    alert: null,
  };

  const [state, dispatch] = useReducer(NotificationsReducer, initialState);

  const showAlert = (alertData) => {
    dispatch({
      type: actions.SHOW_ALERT,
      payload: alertData,
    });
  };

  const hideAlert = () => {
    dispatch({
      type: actions.HIDE_ALERT,
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
        alert: state.alert,
        showAlert,
        hideAlert,
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
