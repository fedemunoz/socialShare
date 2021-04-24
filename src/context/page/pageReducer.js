import * as actions from "./pageActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        title: action.payload.title,
        route: action.payload.route,
      };
    case actions.SET_BACK_URL:
      return {
        ...state,
        backUrl: action.payload,
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
