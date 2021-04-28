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
    case actions.ADD_ACCOUNT:
      return {
        ...state,
        userAccounts: state.userAccounts.push({
          ...action.payload,
          email: true,
        }),
        loading: false,
      };
    case actions.REMOVE_ACCOUNT:
      return {
        ...state,
        userAccounts: state.userAccounts.filter(
          (account) => account.id !== action.payload
        ),
        loading: false,
      };
    case actions.SELECT_ALL_ACCOUNTS:
      return {
        ...state,
        userAccounts: state.userAccounts.map((account) => {
          return {
            ...account,
            email: action.payload,
          };
        }),
        loading: false,
      };
    case actions.SELECT_ACCOUNT:
      return {
        ...state,
        userAccounts: state.userAccounts.map((account) => {
          return account.id.toString() !== action.payload.id
            ? account
            : {
                ...account,
                email: action.payload.value,
              };
        }),
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
