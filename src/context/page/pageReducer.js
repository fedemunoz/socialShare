import * as actions from "./pageActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        title: action.payload.title,
        previousTab: action.payload.previousTab || "",
      };
    case actions.SET_SHOW_ACCOUNTS_HINT:
      return {
        ...state,
        showAccountsHint: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
