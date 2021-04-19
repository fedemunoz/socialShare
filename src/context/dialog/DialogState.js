import React, { useReducer } from 'react';
import DialogContext from './dialogContext';
import DialogReducer from './dialogReducer';
import { SHOW_CONFIRM, HIDE_CONFIRM } from '../types';

const DialogState = props => {
  const initialState = {
    show: false,
    title: '',
    msg: '',
    res: null
  };

  const [state, dispatch] = useReducer(DialogReducer, initialState);

  const showConfirm = (title, msg) => {
    dispatch({
      type: SHOW_CONFIRM,
      payload: {title, msg}
    });
  };

  const hideConfirm = (res) => {
    dispatch({
      type: HIDE_CONFIRM,
      payload: res
    });
  };

  return (
    <DialogContext.Provider
      value={{
        dialog: state,
        showConfirm,
        hideConfirm
      }}
    >
      {props.children}
    </DialogContext.Provider>
  );
};

export default DialogState;
