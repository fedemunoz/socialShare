import { SET_TITLE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;