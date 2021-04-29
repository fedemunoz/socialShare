import * as actions from "./accountsActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_USER_ACCOUNTS:
      return {
        ...state,
        userAccounts: action.payload,
        loading: false,
      };
    case actions.GET_AVAILABLE_ACCOUNTS:
      return {
        ...state,
        availableAccounts: action.payload,
        loading: false,
      };
    case actions.SHOW_QR_ACCOUNT:
      return {
        ...state,
        currentQr: action.payload,
        loading: false,
      };
    case actions.SHOW_ADD_ACCOUNT:
      return {
        ...state,
        currentAddAccount: action.payload,
        loading: false,
      };
    case actions.UPDATE_ACCOUNTS:
      return {
        ...state,
        userAccounts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
