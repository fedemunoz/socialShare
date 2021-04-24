import { SET_PAGE, SHOW_MODAL, HIDE_MODAL } from "./pageActions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        title: action.payload.title,
        route: action.payload.route,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          title: action.payload.title,
          msg: action.payload.msg,
        },
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default reducer;
