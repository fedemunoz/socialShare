import { GET_ACCOUNTS, ADD_ACCOUNT, REMOVE_ACCOUNT } from '../types';

const reducer = (state, action) => {
  switch (action.type) {    
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        loading: false
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.push(action.payload),
        loading: false
      };
    case REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(account => account.id !== action.payload),
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;