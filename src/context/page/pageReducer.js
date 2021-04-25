import * as actions from "./pageActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        title: action.payload.title,
        previousTab: action.payload.previousTab || "",
      };
    case actions.SHOW_MODAL:
      return {
        ...state,
        modal: {
          title: action.payload.title,
          msg: action.payload.msg,
        },
      };
    case actions.HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default reducer;
