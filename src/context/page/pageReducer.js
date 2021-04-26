import * as actions from "./pageActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        title: action.payload.title,
        previousTab: action.payload.previousTab || "",
      };
    default:
      return state;
  }
};

export default reducer;
