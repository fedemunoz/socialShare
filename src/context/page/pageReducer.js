import { SET_PAGE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        title: action.payload.title,
        route: action.payload.route
      };
    default:
      return state;
  }
};

export default reducer;