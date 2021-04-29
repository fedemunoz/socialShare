import * as actions from "./notificationsActions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case actions.HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case actions.SHOW_CONFIRM:
      return {
        ...state,
        confirm: {
          title: action.payload.title,
          msg: action.payload.msg,
        },
      };
    case actions.HIDE_CONFIRM:
      return {
        ...state,
        confirm: null,
      };
    default:
      return state;
  }
};

export default reducer;
