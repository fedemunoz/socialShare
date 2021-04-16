import React, { useReducer } from 'react';
import PageContext from './pageContext';
import PageReducer from './pageReducer';
import { SET_TITLE } from '../types';

const PageState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const setTitle = (title) => {
    dispatch({
      type: SET_TITLE,
      payload: title
    });
  };

  return (
    <PageContext.Provider
      value={{
        title: state,
        setTitle
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
