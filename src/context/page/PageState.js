import React, { useReducer } from 'react';
import PageContext from './pageContext';
import PageReducer from './pageReducer';
import { SET_PAGE } from '../types';

const PageState = props => {
  const initialState = {
    title: null,
    route: 'my-qr'
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const setPage = (pageData) => {
    dispatch({
      type: SET_PAGE,
      payload: pageData
    });
  };

  return (
    <PageContext.Provider
      value={{
        title: state.title,
        route: state.route,
        setPage
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageState;
