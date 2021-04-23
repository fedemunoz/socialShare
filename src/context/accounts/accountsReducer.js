import * as actions from "./accountsActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    case actions.ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.push(action.payload),
        loading: false,
      };
    case actions.REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(
          (account) => account.id !== action.payload
        ),
        loading: false,
      };
    case actions.SET_SELECTED_ACCOUNTS:
      return {
        ...state,
        selectedAccounts: action.payload,
        loading: false,
      };
    case actions.SET_SHOW_QR:
      return {
        ...state,
        showQr: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
